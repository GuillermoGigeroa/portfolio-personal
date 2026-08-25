# Complete deployment script for portfolio-personal (PowerShell version)
# Builds project, commits changes, merges to develop and triggers GitHub Pages deployment

$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting complete deployment process..." -ForegroundColor Magenta
Write-Host "==========================================" -ForegroundColor Magenta

Write-Host "🔨 Step 1: Building project with pnpm..." -ForegroundColor Cyan
pnpm build

Write-Host "📝 Step 2: Adding changes to git..." -ForegroundColor Cyan
git add .

Write-Host "💾 Step 3: Committing changes..." -ForegroundColor Cyan
git commit -m "build '/docs' files"

Write-Host "🚀 Step 4: Pushing to update branch..." -ForegroundColor Cyan
git push

Write-Host "🔄 Step 5: Switching to update branch..." -ForegroundColor Cyan
git checkout update

Write-Host "⬇️ Step 6: Pulling latest changes from update..." -ForegroundColor Cyan
git pull

Write-Host "🔄 Step 7: Switching to develop branch..." -ForegroundColor Cyan
git checkout develop

Write-Host "🔀 Step 8: Merging update into develop..." -ForegroundColor Cyan
git merge update

Write-Host "🚀 Step 9: Pushing develop to remote (triggers GitHub Pages)..." -ForegroundColor Cyan
git push

Write-Host "🔄 Step 10: Switching back to update branch..." -ForegroundColor Cyan
git checkout update

Write-Host "==========================================" -ForegroundColor Magenta
Write-Host "✅ Complete deployment finished successfully!" -ForegroundColor Green
Write-Host "🌐 Your portfolio should be live at: https://guillermogigeroa.github.io/portfolio-personal/" -ForegroundColor Green