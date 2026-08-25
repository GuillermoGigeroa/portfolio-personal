#!/bin/bash

# Deploy script for GitHub Pages
# Merges update branch into develop and pushes to trigger GitHub Pages deployment

set -e  # Exit on error

echo "🔄 Switching to update branch..."
git checkout update

echo "⬇️ Pulling latest changes from update..."
git pull

echo "🔄 Switching to develop branch..."
git checkout develop

echo "🔀 Merging update into develop..."
git merge update

echo "🚀 Pushing develop to remote..."
git push

echo "🔄 Switching back to update branch..."
git checkout update

echo "✅ GitHub Pages deployment completed successfully!"