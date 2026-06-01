# Installs the custom skills into the Claude Code and Gemini skills dirs.
# Engine skills (figma-use, figma-generate-design) install separately, see README.
$ErrorActionPreference = "Stop"
$src = Join-Path $PSScriptRoot "skills"
$targets = @("$env:USERPROFILE\.claude\skills", "$env:USERPROFILE\.gemini\skills")
foreach ($t in $targets) {
  New-Item -ItemType Directory -Force -Path $t | Out-Null
  foreach ($skill in @("devrel-diagram", "oracle-feature-image")) {
    Copy-Item -Recurse -Force (Join-Path $src $skill) (Join-Path $t $skill)
    Write-Host "Installed $skill -> $t"
  }
}
Write-Host "Done. Engine skills (figma-use) install separately, see README."
