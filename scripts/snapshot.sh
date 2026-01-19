#!/bin/bash
set -e

# Snapshot script for creating prototype versions
# Usage: ./scripts/snapshot.sh <prototype-name> [description]
# Example: ./scripts/snapshot.sh a "Baseline version with original slider behavior"
#          ./scripts/snapshot.sh b "New slider UX with ratio preservation"

PROTO_NAME="$1"
DESCRIPTION="$2"

if [ -z "$PROTO_NAME" ]; then
    echo "Usage: ./scripts/snapshot.sh <prototype-name> [description]"
    echo "Example: ./scripts/snapshot.sh a \"Baseline version\""
    exit 1
fi

# Determine the repo name for base path (used in GitHub Pages URL)
REPO_NAME="quiz-demo"
BASE_PATH="/${REPO_NAME}/prototypes/${PROTO_NAME}/"
PROTO_DIR="prototypes/${PROTO_NAME}"
INDEX_FILE="prototypes/index.html"

echo "Creating snapshot: ${PROTO_NAME}"
echo "Base path: ${BASE_PATH}"
echo "Output dir: ${PROTO_DIR}"
echo ""

# Build with the prototype-specific base path
echo "Building..."
npx vite build --base="${BASE_PATH}" --outDir="${PROTO_DIR}"

# Determine tag version (increment if tag exists)
TAG_BASE="prototype-${PROTO_NAME}"
VERSION=1
while git tag -l "${TAG_BASE}-v${VERSION}" | grep -q .; do
    VERSION=$((VERSION + 1))
done
TAG_NAME="${TAG_BASE}-v${VERSION}"

echo ""
echo "Tagging source commit as: ${TAG_NAME}"
git tag "${TAG_NAME}"

# Update the landing page
echo ""
echo "Updating prototypes index..."

# Check if this prototype already has an entry
if grep -q "href=\"./${PROTO_NAME}/\"" "$INDEX_FILE"; then
    # Update existing entry with new version/date
    echo "Prototype '${PROTO_NAME}' already in index (updating timestamp)"
    DATE=$(date "+%Y-%m-%d %H:%M")
    # Update the date in the existing entry using a temp file for compatibility
    sed "s|<span class=\"version\" data-proto=\"${PROTO_NAME}\">.*</span>|<span class=\"version\" data-proto=\"${PROTO_NAME}\">Updated: ${DATE} (${TAG_NAME})</span>|" "$INDEX_FILE" > "${INDEX_FILE}.tmp"
    mv "${INDEX_FILE}.tmp" "$INDEX_FILE"
else
    # Add new entry
    if [ -z "$DESCRIPTION" ]; then
        echo -n "Enter a brief description for this prototype: "
        read DESCRIPTION
    fi

    DATE=$(date "+%Y-%m-%d %H:%M")

    # Create the new entry HTML
    NEW_ENTRY="    <li class=\"prototype-item\">\\
      <h2>Prototype ${PROTO_NAME}</h2>\\
      <p>${DESCRIPTION}</p>\\
      <p><span class=\"version\" data-proto=\"${PROTO_NAME}\">Created: ${DATE} (${TAG_NAME})</span></p>\\
      <a href=\"./${PROTO_NAME}/\">View Prototype</a>\\
    </li>\\
"

    # Insert after the <!-- Add new prototypes here --> comment
    sed "s|<!-- Add new prototypes here -->|<!-- Add new prototypes here -->\\
${NEW_ENTRY}|" "$INDEX_FILE" > "${INDEX_FILE}.tmp"
    mv "${INDEX_FILE}.tmp" "$INDEX_FILE"

    echo "Added '${PROTO_NAME}' to prototypes index"
fi

echo ""
echo "Done! Next steps:"
echo "  1. Review the build: open ${PROTO_DIR}/index.html"
echo "  2. Commit: git add prototypes/ && git commit -m 'Add prototype ${PROTO_NAME}'"
echo "  3. Push with tags: git push && git push --tags"
echo ""
echo "Prototype will be available at:"
echo "  https://<username>.github.io/${REPO_NAME}/prototypes/${PROTO_NAME}/"
