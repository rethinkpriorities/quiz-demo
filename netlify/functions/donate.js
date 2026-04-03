/* global exports */

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

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

exports.handler = async function (event) {
  const { httpMethod } = event;

  if (httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  if (httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, anonymity, splitPreference, splits, amount, refId } = body;

    // Validate required fields
    const errors = [];
    if (!name || !name.trim()) errors.push('name is required');
    if (!email || !validateEmail(email)) errors.push('a valid email is required');
    if (!anonymity || !['anonymous', 'consent'].includes(anonymity))
      errors.push('anonymity selection is required');
    if (!splitPreference || !['defer', 'recommended', 'custom'].includes(splitPreference))
      errors.push('split preference is required');

    if (splitPreference === 'custom' && splits) {
      const total = Object.values(splits).reduce((s, v) => s + (parseFloat(v) || 0), 0);
      if (Math.round(total * 10) / 10 !== 100) {
        errors.push('custom splits must sum to 100%');
      }
    }

    if (errors.length) {
      return jsonResponse(400, { error: errors.join('; ') });
    }

    // For now, echo back success (side effects TBD)
    console.log('Donation intent received:', {
      refId,
      name: name.trim(),
      email: email.trim(),
      anonymity,
      splitPreference,
      amount: amount || null,
    });

    return jsonResponse(201, { success: true, refId });
  } catch (error) {
    console.error('Function error:', error);
    return jsonResponse(500, { error: 'Internal server error' });
  }
};
