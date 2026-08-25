# Build script for portfolio-personal (PowerShell version)
# Builds the project, commits changes and pushes to current branch

$ErrorActionPreference = "Stop"

Write-Host "🔨 Building project with pnpm..." -ForegroundColor Cyan
pnpm build

Write-Host "📝 Adding changes to git..." -ForegroundColor Cyan
git add .

Write-Host "💾 Committing changes..." -ForegroundColor Cyan
git commit -m "build '/docs' files"

Write-Host "🚀 Pushing to remote..." -ForegroundColor Cyan
git push

Write-Host "✅ Build and push completed successfully!" -ForegroundColor Green