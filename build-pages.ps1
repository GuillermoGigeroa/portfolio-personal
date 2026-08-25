# Deploy script for GitHub Pages (PowerShell version)
# Merges update branch into develop and pushes to trigger GitHub Pages deployment

$ErrorActionPreference = "Stop"

Write-Host "🔄 Switching to update branch..." -ForegroundColor Cyan
git checkout update

Write-Host "⬇️ Pulling latest changes from update..." -ForegroundColor Cyan
git pull

Write-Host "🔄 Switching to develop branch..." -ForegroundColor Cyan
git checkout develop

Write-Host "🔀 Merging update into develop..." -ForegroundColor Cyan
git merge update

Write-Host "🚀 Pushing develop to remote..." -ForegroundColor Cyan
git push

Write-Host "🔄 Switching back to update branch..." -ForegroundColor Cyan
git checkout update

Write-Host "✅ GitHub Pages deployment completed successfully!" -ForegroundColor Green