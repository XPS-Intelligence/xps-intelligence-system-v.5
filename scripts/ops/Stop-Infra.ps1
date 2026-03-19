[CmdletBinding()]
param()
$ErrorActionPreference = "Stop"
try { docker compose down } catch { docker-compose down }
