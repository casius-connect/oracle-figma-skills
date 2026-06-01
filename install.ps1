# Installs the custom skills into the Claude Code and Gemini skills dirs.
# Engine skills (figma-use, figma-generate-design) install separately, see README.
$ErrorActionPreference = "Stop"
$src = Join-Path $PSScriptRoot "skills"
$targets = @("$env:USERPROFILE\.claude\skills", "$env:USERPROFILE\.codex\skills", "$env:USERPROFILE\.gemini\skills")
foreach ($t in $targets) {
  New-Item -ItemType Directory -Force -Path $t | Out-Null
  foreach ($skill in @("devrel-diagram", "oracle-feature-image")) {
    $srcSkill = Join-Path $src $skill
    if (-not (Test-Path $srcSkill)) { throw "Source skill missing: $srcSkill" }
    $dest = Join-Path $t $skill
    if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
    Copy-Item -Recurse -Force $srcSkill $dest
    Write-Host "Installed $skill -> $t"
  }
}
Write-Host "Done. Engine skills (figma-use) install separately, see README."
