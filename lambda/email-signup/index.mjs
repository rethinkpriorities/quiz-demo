// AWS Lambda handler for email signup API

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateShortId(length = 7) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return result;
}

async function getDbClient() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url) {
    throw new Error('Missing TURSO_DATABASE_URL');
  }

  if (!authToken) {
    throw new Error('Missing TURSO_AUTH_TOKEN');
  }

  const { createClient } = await import('@libsql/client/web');
  return createClient({ url, authToken });
}

const RESPONSE_HEADERS = {
  'Content-Type': 'application/json',
};

function jsonResponse(statusCode, data) {
  return {
    statusCode,
    headers: RESPONSE_HEADERS,
    body: JSON.stringify(data),
  };
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod;

  if (method === 'OPTIONS') {
    return { statusCode: 204, headers: RESPONSE_HEADERS, body: '' };
  }

  if (method !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { email, sessionId, quizState } = body;

    if (!email || !validateEmail(email)) {
      return jsonResponse(400, { error: 'A valid email is required' });
    }

    const db = await getDbClient();
    let id;

    for (let attempt = 0; attempt < 5; attempt++) {
      id = generateShortId();
      try {
        await db.execute({
          sql: `INSERT INTO email_signups (id, email, session_id, quiz_state)
                VALUES (?, ?, ?, ?)`,
          args: [
            id,
            email.trim(),
            sessionId || null,
            quizState ? JSON.stringify(quizState) : null,
          ],
        });
        break;
      } catch (error) {
        if (error.message?.includes('UNIQUE constraint')) {
          id = null;
          continue;
        }
        throw error;
      }
    }

    if (!id) {
      return jsonResponse(500, { error: 'Failed to generate unique ID' });
    }

    console.log('Email signup saved:', { id, email: email.trim() });
    return jsonResponse(201, { success: true, id });
  } catch (error) {
    console.error('Function error:', error);
    return jsonResponse(500, { error: 'Internal server error' });
  }
};
