#!/bin/bash

# Complete deployment script for portfolio-personal
# Builds project, commits changes, merges to develop and triggers GitHub Pages deployment

set -e  # Exit on error

echo "🚀 Starting complete deployment process..."
echo "=========================================="

echo "🔨 Step 1: Building project with pnpm..."
pnpm build

echo "📝 Step 2: Adding changes to git..."
git add .

echo "💾 Step 3: Committing changes..."
git commit -m "build '/docs' files"

echo "🚀 Step 4: Pushing to update branch..."
git push

echo "🔄 Step 5: Switching to update branch..."
git checkout update

echo "⬇️ Step 6: Pulling latest changes from update..."
git pull

echo "🔄 Step 7: Switching to develop branch..."
git checkout develop

echo "🔀 Step 8: Merging update into develop..."
git merge update

echo "🚀 Step 9: Pushing develop to remote (triggers GitHub Pages)..."
git push

echo "🔄 Step 10: Switching back to update branch..."
git checkout update

echo "=========================================="
echo "✅ Complete deployment finished successfully!"
echo "🌐 Your portfolio should be live at: https://guillermogigeroa.github.io/portfolio-personal/"