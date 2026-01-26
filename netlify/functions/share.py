import json
import os
import secrets
import string
import sqlite3

# Base62 alphabet for short IDs
ALPHABET = string.ascii_letters + string.digits


def generate_short_id(length=7):
    """Generate a random Base62 short ID."""
    return ''.join(secrets.choice(ALPHABET) for _ in range(length))


def get_db_connection():
    """Create a connection to Turso database (remote) or local SQLite file."""
    url = os.environ.get("TURSO_DATABASE_URL")
    auth_token = os.environ.get("TURSO_AUTH_TOKEN")

    if not url:
        raise ValueError("Missing TURSO_DATABASE_URL")

    # Local file - use stdlib sqlite3
    if url.startswith("file:"):
        db_path = url.replace("file:", "")
        return sqlite3.connect(db_path)

    # Remote Turso - use libsql
    import libsql_experimental as libsql

    if not auth_token:
        raise ValueError("Missing TURSO_AUTH_TOKEN for remote database")

    return libsql.connect(database=url, auth_token=auth_token)


def handler(event, context):
    """Handle share creation (POST) and retrieval (GET)."""

    method = event.get("httpMethod", "GET")

    # CORS headers
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Content-Type": "application/json"
    }

    # Handle preflight
    if method == "OPTIONS":
        return {"statusCode": 204, "headers": headers, "body": ""}

    try:
        conn = get_db_connection()

        if method == "POST":
            return create_share(event, conn, headers)
        elif method == "GET":
            return get_share(event, conn, headers)
        else:
            return {
                "statusCode": 405,
                "headers": headers,
                "body": json.dumps({"error": "Method not allowed"})
            }
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)})
        }


def create_share(event, conn, headers):
    """Create a new share and return the short ID."""

    body = json.loads(event.get("body", "{}"))
    credences = body.get("credences")
    session_id = body.get("sessionId")
    quiz_version = body.get("quizVersion")

    if not credences:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Missing credences"})
        }

    # Generate unique short ID (retry on collision)
    for _ in range(5):
        short_id = generate_short_id()
        try:
            conn.execute(
                """INSERT INTO shares (id, credences, session_id, quiz_version)
                   VALUES (?, ?, ?, ?)""",
                (short_id, json.dumps(credences), session_id, quiz_version)
            )
            conn.commit()
            return {
                "statusCode": 201,
                "headers": headers,
                "body": json.dumps({"id": short_id})
            }
        except Exception as e:
            if "UNIQUE constraint" in str(e):
                continue
            raise

    return {
        "statusCode": 500,
        "headers": headers,
        "body": json.dumps({"error": "Failed to generate unique ID"})
    }


def get_share(event, conn, headers):
    """Retrieve a share by ID."""

    # Get ID from query string or path
    params = event.get("queryStringParameters") or {}
    share_id = params.get("id")

    if not share_id:
        # Try to get from path: /share/abc1234
        path = event.get("path", "")
        parts = path.strip("/").split("/")
        if len(parts) >= 2:
            share_id = parts[-1]

    if not share_id:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Missing share ID"})
        }

    result = conn.execute(
        "SELECT credences, quiz_version, created_at FROM shares WHERE id = ?",
        (share_id,)
    ).fetchone()

    if not result:
        return {
            "statusCode": 404,
            "headers": headers,
            "body": json.dumps({"error": "Share not found"})
        }

    # Update access stats
    conn.execute(
        """UPDATE shares
           SET access_count = access_count + 1,
               last_accessed_at = datetime('now')
           WHERE id = ?""",
        (share_id,)
    )
    conn.commit()

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({
            "id": share_id,
            "credences": json.loads(result[0]),
            "quizVersion": result[1],
            "createdAt": result[2]
        })
    }
