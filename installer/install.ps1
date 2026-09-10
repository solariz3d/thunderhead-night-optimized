# Thunderhead Raceway - Night Optimized : installer / uninstaller
# Run it by double-clicking INSTALL.bat or UNINSTALL.bat next to this folder.
# ASCII only on purpose: Windows PowerShell 5.1 misreads non-ASCII characters in scripts without a BOM.

param(
    [switch]$Uninstall,
    [switch]$DetectOnly,
    [switch]$NoPause,
    [string]$TrackPath = ''
)

$ErrorActionPreference = 'Stop'
$ORIGINAL_SHA = '469A1733C2868B84'   # first 16 hex of sha256 of the shipped v0.6 extension\ext_config.ini
$INSTALLED_SHA = '44F8580BEEACD248'  # the same file with Night Optimized
$ADDED = @('night_optimized', 'models_night_optimized.ini', 'ui\night_optimized', 'extension\stock_lights.lua')
$Payload = Join-Path $PSScriptRoot 'files\thunderhead_raceway'

function Say($msg, $color = 'Gray') { Write-Host $msg -ForegroundColor $color }
function ShortSha($file) { (Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash.Substring(0, 16) }
function Finish($code) {
    Write-Host ''
    if (-not $DetectOnly -and -not $NoPause) { Read-Host 'Press Enter to close' | Out-Null }
    exit $code
}

# ---- 1. find the track ----------------------------------------------------------------------------
function Find-Track {
    $candidates = New-Object System.Collections.Generic.List[string]
    $steam = $null
    foreach ($key in 'HKCU:\Software\Valve\Steam', 'HKLM:\SOFTWARE\WOW6432Node\Valve\Steam', 'HKLM:\SOFTWARE\Valve\Steam') {
        try {
            $p = Get-ItemProperty -Path $key -ErrorAction Stop
            if ($p.SteamPath) { $steam = $p.SteamPath; break }
            if ($p.InstallPath) { $steam = $p.InstallPath; break }
        } catch { }
    }
    if ($steam) {
        $steam = $steam -replace '/', '\'
        $candidates.Add($steam)
        $vdf = Join-Path $steam 'steamapps\libraryfolders.vdf'
        if (Test-Path -LiteralPath $vdf) {
            foreach ($line in Get-Content -LiteralPath $vdf) {
                if ($line -match '"path"\s+"([^"]+)"') { $candidates.Add(($Matches[1] -replace '\\\\', '\')) }
            }
        }
    }
    foreach ($lib in ($candidates | Select-Object -Unique)) {
        $t = Join-Path $lib 'steamapps\common\assettocorsa\content\tracks\thunderhead_raceway'
        if (Test-Path -LiteralPath (Join-Path $t 'models_no_dogbowls.ini')) { return $t }
    }
    return $null
}

Say ''
Say 'Thunderhead Raceway - Night Optimized' 'Cyan'
Say '-------------------------------------' 'Cyan'

if (-not $TrackPath) { $TrackPath = Find-Track }
if (-not $TrackPath) {
    Say 'Could not find Thunderhead Raceway automatically.' 'Yellow'
    Say 'Paste the full path of your Assetto Corsa folder (the one that contains "content"), then press Enter.'
    $ac = (Read-Host 'Assetto Corsa folder').Trim('"', ' ')
    $TrackPath = Join-Path $ac 'content\tracks\thunderhead_raceway'
}
if (-not (Test-Path -LiteralPath (Join-Path $TrackPath 'models_no_dogbowls.ini'))) {
    Say ('Thunderhead Raceway was not found at: ' + $TrackPath) 'Red'
    Say 'Install the track first, then run this again. Nothing was changed.' 'Red'
    Finish 1
}
Say ('Found the track: ' + $TrackPath)
if ($DetectOnly) { exit 0 }

$cfg = Join-Path $TrackPath 'extension\ext_config.ini'
$backup = Join-Path $TrackPath 'extension\ext_config.ini.before-night-optimized'

# ---- 2. uninstall ---------------------------------------------------------------------------------
if ($Uninstall) {
    if (-not (Test-Path -LiteralPath $backup)) {
        Say 'Night Optimized does not look installed (no backup of the original lighting file found).' 'Yellow'
        Say 'Nothing was changed.' 'Yellow'
        Finish 1
    }
    Copy-Item -LiteralPath $backup -Destination $cfg -Force
    foreach ($a in $ADDED) {
        $p = Join-Path $TrackPath $a
        if (Test-Path -LiteralPath $p) { Remove-Item -LiteralPath $p -Recurse -Force }
    }
    Remove-Item -LiteralPath $backup -Force
    Say ''
    Say 'Removed. Thunderhead Raceway is back to its original two layouts and lighting.' 'Green'
    Say 'In Content Manager, press F5. If Night Optimized was selected, pick another layout first.'
    Finish 0
}

# ---- 3. install -----------------------------------------------------------------------------------
$now = ShortSha $cfg
if ($now -eq $INSTALLED_SHA) {
    Say 'Night Optimized is already installed. Nothing to do.' 'Green'
    Finish 0
}
if ($now -ne $ORIGINAL_SHA) {
    Say 'Your track''s lighting file is not the version this was made for (Thunderhead Raceway v0.6).' 'Yellow'
    Say 'Installing would overwrite it, so nothing was changed.' 'Yellow'
    Say ('(found ' + $now + ', expected ' + $ORIGINAL_SHA + ')') 'DarkGray'
    Finish 1
}
foreach ($a in $ADDED) {
    if (Test-Path -LiteralPath (Join-Path $TrackPath $a)) {
        Say ('Something is already in the way: ' + $a) 'Yellow'
        Say 'Run UNINSTALL first. Nothing was changed.' 'Yellow'
        Finish 1
    }
}
if (-not (Test-Path -LiteralPath $Payload)) {
    Say 'The installer''s files are missing. Unzip the whole archive first, then run INSTALL.bat from it.' 'Red'
    Finish 1
}

try {
    Copy-Item -LiteralPath $cfg -Destination $backup -Force
    Get-ChildItem -LiteralPath $Payload -Recurse -File | ForEach-Object {
        $rel = $_.FullName.Substring($Payload.Length).TrimStart('\')
        $dst = Join-Path $TrackPath $rel
        New-Item -ItemType Directory -Force -Path (Split-Path $dst) | Out-Null
        Copy-Item -LiteralPath $_.FullName -Destination $dst -Force
    }
} catch {
    Say ('Copying failed: ' + $_.Exception.Message) 'Red'
    Say 'If Content Manager or the game is open, close it and run INSTALL again.' 'Red'
    if (Test-Path -LiteralPath $backup) { Copy-Item -LiteralPath $backup -Destination $cfg -Force }
    foreach ($a in $ADDED) { $p = Join-Path $TrackPath $a; if (Test-Path -LiteralPath $p) { Remove-Item -LiteralPath $p -Recurse -Force } }
    if (Test-Path -LiteralPath $backup) { Remove-Item -LiteralPath $backup -Force }
    Say 'Everything was put back the way it was.' 'Yellow'
    Finish 1
}

if ((ShortSha $cfg) -ne $INSTALLED_SHA) {
    Say 'The lighting file did not copy correctly. Run UNINSTALL, then INSTALL again.' 'Red'
    Finish 1
}
Say ''
Say 'Installed!' 'Green'
Say 'Open Content Manager, press F5, pick Thunderhead Raceway and choose "Night Optimized".'
Say 'To remove it later, double-click UNINSTALL.bat.'
Finish 0
