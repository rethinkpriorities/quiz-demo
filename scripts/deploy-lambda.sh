#!/bin/bash
# Deploy Lambda function to AWS using SAM

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LAMBDA_DIR="$PROJECT_ROOT/lambda"

echo "=== Quiz Demo Lambda Deployment ==="

# Check for required tools
if ! command -v sam &> /dev/null; then
    echo "Error: AWS SAM CLI is not installed."
    echo "Install with: brew install aws-sam-cli"
    exit 1
fi

if ! command -v aws &> /dev/null; then
    echo "Error: AWS CLI is not installed."
    echo "Install with: brew install awscli"
    exit 1
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    echo "Error: AWS credentials not configured."
    echo "Run: aws configure"
    exit 1
fi

# Check for Turso credentials
if [ -z "$TURSO_DATABASE_URL" ] || [ -z "$TURSO_AUTH_TOKEN" ]; then
    echo "Error: Missing Turso credentials."
    echo "Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN environment variables."
    echo ""
    echo "Example:"
    echo "  export TURSO_DATABASE_URL='libsql://your-db.turso.io'"
    echo "  export TURSO_AUTH_TOKEN='your-token'"
    exit 1
fi

cd "$LAMBDA_DIR"

echo ""
echo "Installing Lambda dependencies..."
cd share && npm install && cd ..

echo ""
echo "Building SAM application..."
sam build

echo ""
echo "Deploying to AWS..."
sam deploy \
    --stack-name quiz-demo-share \
    --capabilities CAPABILITY_IAM \
    --resolve-s3 \
    --parameter-overrides \
        TursoDatabaseUrl="$TURSO_DATABASE_URL" \
        TursoAuthToken="$TURSO_AUTH_TOKEN" \
    --no-confirm-changeset \
    --no-fail-on-empty-changeset

echo ""
echo "=== Deployment Complete ==="
echo ""
echo "Getting Function URL..."
FUNCTION_URL=$(aws cloudformation describe-stacks \
    --stack-name quiz-demo-share \
    --query 'Stacks[0].Outputs[?OutputKey==`ShareFunctionUrl`].OutputValue' \
    --output text)

echo ""
echo "Function URL: $FUNCTION_URL"
echo ""
echo "Add this to your GitHub Actions workflow:"
echo "  VITE_API_URL: '$FUNCTION_URL'"
