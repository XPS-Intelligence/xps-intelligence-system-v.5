[CmdletBinding()]
param()
$ErrorActionPreference = "Stop"
try { docker compose up -d } catch { docker-compose up -d }
