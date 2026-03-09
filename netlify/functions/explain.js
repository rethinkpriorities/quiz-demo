/* global process */

// Netlify function mirror for local development with `netlify dev`

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

function jsonResponse(statusCode, data) {
  return {
    statusCode,
    headers: CORS_HEADERS,
    body: JSON.stringify(data),
  };
}

const SYSTEM_PROMPT = `You explain results from the Donor Compass, a charitable giving quiz by Rethink Priorities. Users answer questions about their values, and the tool calculates how to allocate donations across projects.

The projects are: Malaria Prevention (human health, near-term), Cage-Free Campaigns (farmed birds), Shrimp Welfare (invertebrates), Wild Animal Welfare (mammals + invertebrates, medium/long-term), Fish Welfare (farmed fish), and AI Safety & Policy (x-risk, long-term).

User answers (credences) act as multipliers on project scores. Higher credence in animal welfare boosts animal projects; choosing "short-term only" zeroes out long-term projects; discounting non-x-risk projects boosts AI Safety, etc.

Write 2-3 short paragraphs explaining why the user got these specific results. Start by briefly explaining how this particular calculation method works (the user may not know), then connect their quiz answers to the outcome. Be specific: "Because you gave X% to Y, Z scored higher." Be friendly and plain-spoken.

Do NOT list all credences back, give general charity advice, or hedge excessively.`;

export async function handler(event) {
  const { httpMethod } = event;

  if (httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  if (httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  let apiKey = process.env.ANTHROPIC_API_KEY;

  // Netlify dev may pull env vars from remote site, overriding local .env.
  // Fall back to reading .env directly if the key looks wrong.
  if (!apiKey || !apiKey.startsWith('sk-ant-')) {
    try {
      const { readFileSync } = await import('fs');
      const { resolve } = await import('path');
      const envPath = resolve(process.cwd(), '.env');
      const envContent = readFileSync(envPath, 'utf-8');
      const match = envContent.match(/ANTHROPIC_API_KEY=["']?([^"'\n]+)/);
      if (match) apiKey = match[1];
    } catch {
      // ignore
    }
  }

  if (!apiKey) {
    console.error('Missing ANTHROPIC_API_KEY');
    return jsonResponse(500, { error: 'Server configuration error' });
  }

  try {
    const { method, methodTitle, methodDescription, results, credences, budget } = JSON.parse(
      event.body || '{}'
    );

    if (!method || !results || !credences) {
      return jsonResponse(400, { error: 'Missing required fields: method, results, credences' });
    }

    const userMessage = `**Method:** ${methodTitle || method}
${methodDescription ? `**How it works:** ${methodDescription}\n` : ''}
**Budget:** $${budget || 897}K

**Credences:** ${JSON.stringify(credences)}

**Results:** ${JSON.stringify(results)}`;

    const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!apiResponse.ok) {
      const errData = await apiResponse.json().catch(() => ({}));
      console.error('Anthropic API error:', apiResponse.status, errData);
      throw new Error(errData.error?.message || `Anthropic API returned ${apiResponse.status}`);
    }

    const response = await apiResponse.json();

    // Log token usage and cost
    const usage = response.usage || {};
    const inputTokens = usage.input_tokens || 0;
    const outputTokens = usage.output_tokens || 0;
    // Pricing per million tokens: Opus $5 input, $25 output; Sonnet $3/$15
    const model = response.model || 'unknown';
    const isOpus = model.includes('opus');
    const inputCost = (inputTokens / 1_000_000) * (isOpus ? 5 : 3);
    const outputCost = (outputTokens / 1_000_000) * (isOpus ? 25 : 15);
    const totalCost = inputCost + outputCost;
    console.log(
      `[Explain] Model: ${model} | Input: ${inputTokens} tokens ($${inputCost.toFixed(4)}) | Output: ${outputTokens} tokens ($${outputCost.toFixed(4)}) | Total: $${totalCost.toFixed(4)}`
    );

    const explanation = response.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n\n');

    return jsonResponse(200, { explanation });
  } catch (error) {
    console.error('Explain function error:', error.status, error.message, error.error);
    return jsonResponse(500, { error: error.message || 'Failed to generate explanation' });
  }
}
