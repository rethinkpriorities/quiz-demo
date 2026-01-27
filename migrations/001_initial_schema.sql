-- Initial schema for share URLs
-- Run: turso db shell donor-compass < migrations/001_initial_schema.sql

CREATE TABLE IF NOT EXISTS shares (
    id TEXT PRIMARY KEY,              -- 7-char Base62 short ID
    credences TEXT NOT NULL,          -- JSON blob of quiz answers
    quiz_version TEXT,                -- Version of quiz config (for compatibility)
    session_id TEXT,                  -- Links to analytics session
    created_at TEXT DEFAULT (datetime('now')),
    access_count INTEGER DEFAULT 0,
    last_accessed_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_shares_session ON shares(session_id);
