@echo off
REM EliteX Beauty Salon - Complete Shutdown Script (Windows)

echo.
echo ======================================================================
echo.
echo   ^>^>^> ELITEX BEAUTY SALON - SHUTDOWN SCRIPT ^<^<^<
echo.
echo ======================================================================
echo.

REM Get script directory
cd /d "%~dp0"
set SCRIPT_DIR=%cd%

REM Step 1: Stop Frontend
echo [STEP 1/3] Stopping Frontend (Angular)...
taskkill /FI "WINDOWTITLE eq EliteX Frontend" /T /F >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Frontend stopped
) else (
    echo [INFO] Frontend not running
)
echo.

REM Step 2: Stop Backend
echo [STEP 2/3] Stopping Backend (Spring Boot)...
taskkill /FI "WINDOWTITLE eq EliteX Backend" /T /F >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Backend stopped
) else (
    echo [INFO] Backend not running
)
timeout /t 2 /nobreak
echo.

REM Step 3: Stop Kafka & Zookeeper
echo [STEP 3/3] Stopping Kafka ^& Zookeeper...
if exist "docker-compose.kafka.yml" (
    docker-compose -f docker-compose.kafka.yml down
    echo [OK] Kafka ^& Zookeeper stopped
) else (
    echo [INFO] docker-compose.kafka.yml not found
)
echo.

echo ======================================================================
echo [SUCCESS] ALL SERVICES STOPPED SUCCESSFULLY!
echo ======================================================================
echo.
echo To start again, run:
echo   start-all.bat
echo.
pause
