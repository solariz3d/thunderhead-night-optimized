@echo off
rem Removes Night Optimized and restores the original lighting. Double-click me.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0installer\install.ps1" -Uninstall
