@echo off
REM EliteX Beauty Salon - Status Check Script (Windows)

echo.
echo ======================================================================
echo.
echo   ^>^>^> ELITEX BEAUTY SALON - STATUS CHECK ^<^<^<
echo.
echo ======================================================================
echo.

setlocal enabledelayedexpansion

REM Function to check port
REM We'll use netstat instead

echo Service Status:
echo ======================================================================

REM Check Zookeeper (port 2181)
netstat -ano | findstr :2181 >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Zookeeper (port 2181)
    set /a SERVICES_UP+=1
) else (
    echo [FAIL] Zookeeper (port 2181) - Not responding
)

REM Check Kafka (port 9092)
netstat -ano | findstr :9092 >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Kafka Broker (port 9092)
    set /a SERVICES_UP+=1
) else (
    echo [FAIL] Kafka Broker (port 9092) - Not responding
)

REM Check Backend (port 8080)
netstat -ano | findstr :8080 >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Backend API (port 8080)
    echo         URL: http://localhost:8080/api/services
    set /a SERVICES_UP+=1
) else (
    echo [FAIL] Backend API (port 8080) - Not responding
)

REM Check Frontend (port 4200)
netstat -ano | findstr :4200 >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Frontend (port 4200)
    echo         URL: http://localhost:4200
    set /a SERVICES_UP+=1
) else (
    echo [FAIL] Frontend (port 4200) - Not responding
)

echo.
echo ======================================================================
echo.
echo Summary:
echo   Services UP: %SERVICES_UP% / 4
echo.

if %SERVICES_UP% EQU 4 (
    echo [SUCCESS] All services are running!
    echo.
    echo Quick Links:
    echo   Frontend:    http://localhost:4200
    echo   API Docs:    http://localhost:8080/swagger-ui.html
    echo   H2 Console:  http://localhost:8080/h2-console
) else if %SERVICES_UP% GTR 0 (
    echo [INFO] Some services are still starting...
    echo        Check back in a few seconds
) else (
    echo [ERROR] Services are not running
    echo.
    echo To start services, run:
    echo   start-all.bat
)

echo.
echo Process Information:
echo ======================================================================

REM Check Java processes
tasklist | findstr java >nul
if %ERRORLEVEL% EQU 0 (
    echo Backend Java processes: [RUNNING]
) else (
    echo Backend Java processes: [STOPPED]
)

REM Check npm processes
tasklist | findstr npm >nul
if %ERRORLEVEL% EQU 0 (
    echo Frontend npm processes: [RUNNING]
) else (
    echo Frontend npm processes: [STOPPED]
)

REM Check Docker containers
for /f %%i in ('docker ps --filter "name=elitex" --format "{{.Names}}" 2^>nul ^| find /c /v ""') do set DOCKER_COUNT=%%i
echo Docker containers: [%DOCKER_COUNT%]

echo.
echo Useful Commands:
echo ======================================================================
echo   start-all.bat          - Start all services
echo   stop-all.bat           - Stop all services
echo   status.bat             - Check status (this script)
echo.
pause
