#!/bin/bash

# Build script for portfolio-personal
# Builds the project, commits changes and pushes to current branch

set -e  # Exit on error

echo "🔨 Building project with pnpm..."
pnpm build

echo "📝 Adding changes to git..."
git add .

echo "💾 Committing changes..."
git commit -m "build '/docs' files"

echo "🚀 Pushing to remote..."
git push

echo "✅ Build and push completed successfully!"