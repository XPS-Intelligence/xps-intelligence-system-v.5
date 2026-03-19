[CmdletBinding()]
param(
    [string]$RepoPath = ""
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($RepoPath)) {
    if ($PSScriptRoot) {
        $RepoPath = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
    } else {
        $RepoPath = (Resolve-Path ".").Path
    }
}

$RepoPath = [System.IO.Path]::GetFullPath($RepoPath)

Write-Host ""
Write-Host "=== XPS SYSTEM VALIDATION ===" -ForegroundColor Cyan
Write-Host "Repo Path: $RepoPath" -ForegroundColor Gray
Write-Host ""

if (-not (Test-Path -LiteralPath $RepoPath)) {
    throw "Repo path does not exist: $RepoPath"
}

$requiredFiles = @(
    ".env.example",
    "docker-compose.yml",
    "package.json",
    "railway.json",
    ".github\workflows\ci-cd.yml",
    "docs\_index\MASTER_INDEX.md",
    "docs\_taxonomy\TAXONOMY.md"
)

$failed = $false

foreach ($file in $requiredFiles) {
    $path = Join-Path $RepoPath $file
    if (Test-Path -LiteralPath $path) {
        Write-Host "[PASS] $file" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] Missing: $file" -ForegroundColor Red
        $failed = $true
    }
}

Write-Host ""
Write-Host "=== DOCKER STATUS ===" -ForegroundColor Cyan
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

Write-Host ""
Write-Host "=== GIT STATUS ===" -ForegroundColor Cyan
Push-Location $RepoPath
try {
    git status --short
}
finally {
    Pop-Location
}

Write-Host ""
if ($failed) {
    Write-Host "VALIDATION RESULT: FAIL" -ForegroundColor Red
    exit 1
} else {
    Write-Host "VALIDATION RESULT: PASS" -ForegroundColor Green
    exit 0
}
