#!/usr/bin/env python3
"""Initialize local development database by running all migrations."""

import sqlite3
from pathlib import Path

DB_PATH = "dev.db"
MIGRATIONS_DIR = Path(__file__).parent.parent / "migrations"


def main():
    conn = sqlite3.connect(DB_PATH)

    # Run all migration files in order
    migrations = sorted(MIGRATIONS_DIR.glob("*.sql"))

    for migration in migrations:
        print(f"Running {migration.name}...")
        sql = migration.read_text()
        conn.executescript(sql)

    conn.commit()
    conn.close()
    print(f"Initialized {DB_PATH} with {len(migrations)} migration(s)")


if __name__ == "__main__":
    main()
