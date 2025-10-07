# PowerShell script to start Ollama with the gpt-oss:120b-cloud model
# Verifica que Ollama esté en el PATH
if (-not (Get-Command ollama -ErrorAction SilentlyContinue)) {
    Write-Host "Ollama no está instalado o no está en el PATH. Instálalo desde https://ollama.com"
    exit 1
}
# Ejecuta el modelo en una nueva ventana de PowerShell de forma asíncrona
$arg = "-NoExit -Command ""ollama run gpt-oss:120b-cloud"""
Start-Process powershell -ArgumentList $arg -WindowStyle Normal
