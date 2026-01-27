/* global process */
import { createClient } from '@libsql/client';

// Base62 alphabet for short IDs
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateShortId(length = 7) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return result;
}

function getDbClient() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url) {
    throw new Error('Missing TURSO_DATABASE_URL');
  }

  // Local file doesn't need auth token
  if (url.startsWith('file:')) {
    return createClient({ url });
  }

  if (!authToken) {
    throw new Error('Missing TURSO_AUTH_TOKEN for remote database');
  }

  return createClient({ url, authToken });
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Content-Type': 'application/json',
};

export async function handler(event) {
  const { httpMethod } = event;

  // Handle preflight
  if (httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  try {
    const db = getDbClient();

    if (httpMethod === 'POST') {
      return await createShare(event, db);
    } else if (httpMethod === 'GET') {
      return await getShare(event, db);
    } else {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' }),
      };
    }
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
}

async function createShare(event, db) {
  const body = JSON.parse(event.body || '{}');
  const { questions, credences, sessionId, quizVersion } = body;

  // Support both new format (questions with full state) and legacy format (credences only)
  const dataToStore = questions || credences;

  if (!dataToStore) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Missing questions or credences' }),
    };
  }

  // Generate unique short ID (retry on collision)
  for (let attempt = 0; attempt < 5; attempt++) {
    const shortId = generateShortId();
    try {
      await db.execute({
        sql: `INSERT INTO shares (id, credences, session_id, quiz_version)
              VALUES (?, ?, ?, ?)`,
        args: [shortId, JSON.stringify(dataToStore), sessionId || null, quizVersion || null],
      });

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({ id: shortId }),
      };
    } catch (error) {
      if (error.message?.includes('UNIQUE constraint')) {
        continue;
      }
      throw error;
    }
  }

  return {
    statusCode: 500,
    headers,
    body: JSON.stringify({ error: 'Failed to generate unique ID' }),
  };
}

async function getShare(event, db) {
  // Get ID from query string or path
  let shareId = event.queryStringParameters?.id;

  if (!shareId) {
    // Try to get from path: /api/share/abc1234
    const path = event.path || '';
    const parts = path.split('/').filter(Boolean);
    if (parts.length >= 2) {
      shareId = parts[parts.length - 1];
    }
  }

  if (!shareId) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Missing share ID' }),
    };
  }

  const result = await db.execute({
    sql: 'SELECT credences, quiz_version, created_at FROM shares WHERE id = ?',
    args: [shareId],
  });

  if (result.rows.length === 0) {
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Share not found' }),
    };
  }

  // Update access stats
  await db.execute({
    sql: `UPDATE shares
          SET access_count = access_count + 1,
              last_accessed_at = datetime('now')
          WHERE id = ?`,
    args: [shareId],
  });

  const row = result.rows[0];
  const storedData = JSON.parse(row.credences);

  // Detect format: new format has inputMode/lockedKey in question objects,
  // legacy format has just credences (numbers) directly
  const firstQuestion = Object.values(storedData)[0];
  const isNewFormat =
    firstQuestion && typeof firstQuestion === 'object' && 'credences' in firstQuestion;

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      id: shareId,
      // Return as 'questions' for new format, 'credences' for legacy
      ...(isNewFormat ? { questions: storedData } : { credences: storedData }),
      quizVersion: row.quiz_version,
      createdAt: row.created_at,
    }),
  };
}
