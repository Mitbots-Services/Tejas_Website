# Quick Launch Guide - Windows & macOS

## Windows - Create Shortcuts

### Method 1: Desktop Shortcuts (Easy)

#### Start All Services Shortcut
1. Right-click on Desktop → New → Shortcut
2. Enter location:
   ```
   cmd /k "cd /d D:\projects\elitex saloon\elitex-beauty-salon-complete && start-all.bat"
   ```
3. Name: `Start EliteX`
4. Right-click → Properties → Advanced → Check "Run as administrator"
5. Click OK

#### Stop All Services Shortcut
1. Right-click on Desktop → New → Shortcut
2. Enter location:
   ```
   cmd /k "cd /d D:\projects\elitex saloon\elitex-beauty-salon-complete && stop-all.bat"
   ```
3. Name: `Stop EliteX`
4. Right-click → Properties → Advanced → Check "Run as administrator"
5. Click OK

#### Check Status Shortcut
1. Right-click on Desktop → New → Shortcut
2. Enter location:
   ```
   cmd /k "cd /d D:\projects\elitex saloon\elitex-beauty-salon-complete && status.bat"
   ```
3. Name: `EliteX Status`
4. Click OK

### Method 2: Batch Launcher (Advanced)

Create a file named `quick-launch.bat` in the project root:

```batch
@echo off
setlocal enabledelayedexpansion

:menu
cls
echo.
echo ╔══════════════════════════════════════════════════╗
echo ║  ELITEX BEAUTY SALON - QUICK LAUNCHER           ║
echo ╚══════════════════════════════════════════════════╝
echo.
echo 1. Start All Services
echo 2. Stop All Services
echo 3. Check Status
echo 4. Open Frontend (http://localhost:4200)
echo 5. Open Backend API (http://localhost:8080)
echo 6. Open H2 Console (http://localhost:8080/h2-console)
echo 7. Exit
echo.
set /p choice="Select an option [1-7]: "

if "%choice%"=="1" goto start_services
if "%choice%"=="2" goto stop_services
if "%choice%"=="3" goto check_status
if "%choice%"=="4" goto open_frontend
if "%choice%"=="5" goto open_backend
if "%choice%"=="6" goto open_h2
if "%choice%"=="7" goto exit_menu

goto menu

:start_services
cls
echo Starting services...
call start-all.bat
goto menu

:stop_services
cls
echo Stopping services...
call stop-all.bat
goto menu

:check_status
cls
call status.bat
echo.
pause
goto menu

:open_frontend
start http://localhost:4200
echo Opening Frontend...
goto menu

:open_backend
start http://localhost:8080
echo Opening Backend API...
goto menu

:open_h2
start http://localhost:8080/h2-console
echo Opening H2 Console...
goto menu

:exit_menu
exit /b 0
```

Then create a shortcut to `quick-launch.bat` on your Desktop.

---

## macOS - Create Aliases

Add these aliases to your `~/.zshrc` or `~/.bash_profile`:

```bash
# EliteX Beauty Salon shortcuts
alias elitex-start='cd ~/projects/elitex-beauty-salon-complete && bash start-all.sh'
alias elitex-stop='cd ~/projects/elitex-beauty-salon-complete && bash stop-all.sh'
alias elitex-status='cd ~/projects/elitex-beauty-salon-complete && bash status.sh'
alias elitex-frontend='open http://localhost:4200'
alias elitex-backend='open http://localhost:8080'
alias elitex-h2='open http://localhost:8080/h2-console'
```

Then reload:
```bash
source ~/.zshrc
```

Usage:
```bash
elitex-start      # Start services
elitex-stop       # Stop services
elitex-status     # Check status
elitex-frontend   # Open frontend
```

---

## Linux - Create Aliases & Desktop Entry

### Add Aliases

Add to `~/.bashrc`:

```bash
# EliteX Beauty Salon shortcuts
alias elitex-start='cd ~/projects/elitex-beauty-salon-complete && bash start-all.sh'
alias elitex-stop='cd ~/projects/elitex-beauty-salon-complete && bash stop-all.sh'
alias elitex-status='cd ~/projects/elitex-beauty-salon-complete && bash status.sh'
```

Reload:
```bash
source ~/.bashrc
```

### Create Desktop Launcher

Create `~/.local/share/applications/elitex-start.desktop`:

```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=Start EliteX
Comment=Start all EliteX services
Exec=bash -c 'cd ~/projects/elitex-beauty-salon-complete && bash start-all.sh'
Icon=system-run
Terminal=true
```

---

## VS Code Integration

### Create VS Code Tasks

Create `.vscode/tasks.json`:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "EliteX: Start All",
            "type": "shell",
            "command": "${workspaceFolder}/start-all.sh",
            "isBackground": false,
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "presentation": {
                "reveal": "always"
            }
        },
        {
            "label": "EliteX: Stop All",
            "type": "shell",
            "command": "${workspaceFolder}/stop-all.sh",
            "isBackground": false,
            "group": "build"
        },
        {
            "label": "EliteX: Status",
            "type": "shell",
            "command": "${workspaceFolder}/status.sh",
            "isBackground": false,
            "group": "build"
        }
    ]
}
```

Usage in VS Code:
- Press `Ctrl+Shift+B` (Windows/Linux) or `Cmd+Shift+B` (macOS)
- Select task from dropdown
- Watch output in terminal

---

## PowerShell Script (Windows)

Create `Quick-Launch.ps1`:

```powershell
# EliteX Beauty Salon Quick Launcher
Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  ELITEX BEAUTY SALON - QUICK LAUNCHER           ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$options = @(
    "Start All Services",
    "Stop All Services", 
    "Check Status",
    "Open Frontend (localhost:4200)",
    "Open Backend API (localhost:8080)",
    "Open H2 Console (localhost:8080/h2-console)",
    "Exit"
)

for ($i = 0; $i -lt $options.Length; $i++) {
    Write-Host "$($i + 1). $($options[$i])"
}

Write-Host ""
$choice = Read-Host "Select an option [1-7]"

$projectDir = "D:\projects\elitex saloon\elitex-beauty-salon-complete"

switch ($choice) {
    "1" { 
        Write-Host "Starting services..."
        & "$projectDir\start-all.bat"
    }
    "2" {
        Write-Host "Stopping services..."
        & "$projectDir\stop-all.bat"
    }
    "3" {
        Write-Host "Checking status..."
        & "$projectDir\status.bat"
    }
    "4" {
        Start-Process "http://localhost:4200"
    }
    "5" {
        Start-Process "http://localhost:8080"
    }
    "6" {
        Start-Process "http://localhost:8080/h2-console"
    }
    "7" {
        exit
    }
    default {
        Write-Host "Invalid selection"
    }
}
```

Run with:
```powershell
PowerShell -ExecutionPolicy Bypass -File Quick-Launch.ps1
```

---

## Browser Bookmarks

Add these bookmarks to your browser for quick access:

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:8080/api/services
- **API Docs**: http://localhost:8080/swagger-ui.html
- **H2 Console**: http://localhost:8080/h2-console
- **Kafka Topics**: (via cli commands)

---

## System Tray (Windows)

Create a VBScript to run from System Tray:

Create `tray-launcher.vbs`:

```vbscript
Set objShell = CreateObject("WScript.Shell")
projectDir = "D:\projects\elitex saloon\elitex-beauty-salon-complete"

' Create menu
Dim args(0)
result = objShell.Popup("EliteX Beauty Salon" & vbCrLf & vbCrLf & _
    "1 - Start Services" & vbCrLf & _
    "2 - Stop Services" & vbCrLf & _
    "3 - Check Status", , , 3)

Select Case result
    Case 1
        objShell.Run "cmd /k cd /d " & projectDir & " && start-all.bat"
    Case 2
        objShell.Run "cmd /k cd /d " & projectDir & " && stop-all.bat"
    Case 3
        objShell.Run "cmd /k cd /d " & projectDir & " && status.bat"
End Select
```

---

## Docker Desktop Integration

### Enable Docker Desktop Shortcuts

1. Open Docker Desktop Settings
2. Resources → File Sharing
3. Add project folder: `D:\projects\elitex saloon`
4. Apply

---

## Quick Reference Commands

### Windows (PowerShell)

```powershell
# Navigate to project
cd 'd:\projects\elitex saloon\elitex-beauty-salon-complete'

# Start
.\start-all.bat

# Stop
.\stop-all.bat

# Status
.\status.bat
```

### macOS/Linux (Terminal)

```bash
# Navigate to project
cd ~/projects/elitex-beauty-salon-complete

# Start
bash start-all.sh

# Stop
bash stop-all.sh

# Status
bash status.sh
```

---

## Keyboard Shortcuts (Terminal)

```
Ctrl+C     - Stop running service
Ctrl+Z     - Pause service (then 'fg' to resume)
Ctrl+D     - Close terminal
Ctrl+L     - Clear screen
```

---

## Useful Browser Extensions

For development, consider:

- **JSON Formatter** - Format API responses
- **REST Client** - Test API endpoints
- **DevTools** - Browser developer tools
- **Dark Reader** - Dark mode for H2 console

---

**Updated**: December 2025
**Version**: 1.0
**Status**: Ready to Use ✅
