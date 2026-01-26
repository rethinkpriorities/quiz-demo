#!/usr/bin/env python3
"""Test the share function locally without Netlify."""

import sys
import os

# Add the functions directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'netlify', 'functions'))

# Set env vars for local db
os.environ['TURSO_DATABASE_URL'] = 'file:dev.db'
os.environ['TURSO_AUTH_TOKEN'] = ''

import json
from share import handler

# Test POST - create a share
print("=== Testing POST (create share) ===")
post_event = {
    'httpMethod': 'POST',
    'body': json.dumps({
        'credences': {'q1': {'equal': 50, '10x': 30, '100x': 20}},
        'sessionId': 'test-session-123'
    })
}
result = handler(post_event, None)
print(f"Status: {result['statusCode']}")
print(f"Body: {result['body']}")

if result['statusCode'] == 201:
    share_id = json.loads(result['body'])['id']

    # Test GET - retrieve the share
    print(f"\n=== Testing GET (retrieve share {share_id}) ===")
    get_event = {
        'httpMethod': 'GET',
        'queryStringParameters': {'id': share_id},
        'path': f'/api/share/{share_id}'
    }
    result = handler(get_event, None)
    print(f"Status: {result['statusCode']}")
    print(f"Body: {result['body']}")
