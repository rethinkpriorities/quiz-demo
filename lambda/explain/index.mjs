// AWS Lambda handler for AI explanation API

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
  const httpMethod = event.requestContext?.http?.method || event.httpMethod;

  if (httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  if (httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('Missing ANTHROPIC_API_KEY');
    return jsonResponse(500, { error: 'Server configuration error' });
  }

  try {
    let bodyStr = event.body || '{}';
    if (event.isBase64Encoded) {
      bodyStr = Buffer.from(bodyStr, 'base64').toString('utf-8');
    }
    const { method, methodTitle, methodDescription, results, credences, budget } = JSON.parse(bodyStr);

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
    const explanation = response.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n\n');

    return jsonResponse(200, { explanation });
  } catch (error) {
    console.error('Explain function error:', error);
    return jsonResponse(500, { error: error.message || 'Failed to generate explanation' });
  }
}
