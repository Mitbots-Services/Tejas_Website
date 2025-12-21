@echo off
echo Starting Elitex Beauty Salon...
echo.
echo ===================================
echo Elitex Beauty Salon - Starting...
echo ===================================
echo.
echo Starting Backend (Java Spring Boot)...
start "Backend" cmd /k "cd backend && mvn clean package -DskipTests && java -jar target/salon-1.0.0.jar"
timeout /t 15
echo.
echo Starting Frontend (Angular)...
start "Frontend" cmd /k "cd frontend && npm install && npm start"
echo.
echo Backend will start on: http://localhost:8080
echo Frontend will start on: http://localhost:4200
echo.
echo Please wait for both servers to start...
echo H2 Console: http://localhost:8080/h2-console
echo Swagger API: http://localhost:8080/swagger-ui/index.html
echo ===================================
REM EliteX Beauty Salon - Startup Script WITHOUT Docker (Local Kafka - Binary Distribution)

setlocal enabledelayedexpansion

echo.
echo ======================================================================
echo.
echo   ^>^>^> ELITEX BEAUTY SALON - STARTUP SCRIPT (NO DOCKER) ^<^<^<
echo.
echo ======================================================================
echo.

REM Get script directory
cd /d "%~dp0"
set SCRIPT_DIR=%cd%

REM Check if Kafka is installed locally
set KAFKA_HOME=C:\kafka
if not exist "%KAFKA_HOME%\libs" (
    echo.
    echo ======================================================================
    echo Kafka libs folder not found!
    echo ======================================================================
    echo.
    echo Expected location: %KAFKA_HOME%\libs
    echo.
    echo Please ensure you downloaded the BINARY distribution of Kafka
    echo (not the source code) and extracted it to C:\kafka
    echo.
    echo Download from: https://kafka.apache.org/downloads
    echo Look for "Binary downloads" section
    echo.
    pause
    exit /b 1
)

echo [OK] Found Kafka installation at: %KAFKA_HOME%
echo.

REM Step 1: Start Zookeeper using direct Java command
echo [STEP 1/5] Starting Zookeeper...
cd /d "%KAFKA_HOME%"

REM Build classpath for Zookeeper
set CLASSPATH=
for %%i in ("%KAFKA_HOME%\libs\*") do (
    if defined CLASSPATH (
        set CLASSPATH=!CLASSPATH!;%%i
    ) else (
        set CLASSPATH=%%i
    )
)

REM Start Zookeeper in a new window
start "EliteX Zookeeper" cmd /k "cd /d %KAFKA_HOME% && java -Xmx512M -Xms512M -Dlog4j.configuration=file:%KAFKA_HOME%/config/log4j.properties -cp "%CLASSPATH%" org.apache.zookeeper.server.quorum.QuorumPeerMain %KAFKA_HOME%/config/zookeeper.properties"

timeout /t 8 /nobreak >nul
echo [OK] Zookeeper started
echo.

REM Step 2: Start Kafka using direct Java command
echo [STEP 2/5] Starting Kafka Broker...
cd /d "%KAFKA_HOME%"

REM Start Kafka in a new window
start "EliteX Kafka" cmd /k "cd /d %KAFKA_HOME% && java -Xmx1G -Xms1G -server -XX:+UseG1GC -XX:MaxGCPauseMillis=20 -XX:InitiatingHeapOccupancyPercent=35 -XX:+ExplicitGCInvokesConcurrent -Djava.awt.headless=true -Dlog4j.configuration=file:%KAFKA_HOME%/config/log4j.properties -cp "%CLASSPATH%" kafka.Kafka %KAFKA_HOME%/config/server.properties"

echo Waiting for Kafka to initialize...
timeout /t 15 /nobreak >nul
echo.

REM Step 3: Verify Kafka is ready
echo [STEP 3/5] Verifying Kafka availability...
set MAX_RETRIES=20
set RETRY_COUNT=0

:KAFKA_CHECK
set /a RETRY_COUNT+=1
echo Checking Kafka connectivity (Attempt %RETRY_COUNT%/%MAX_RETRIES%)...

REM Simple port check - try to connect to port 9092
powershell -Command "try { $client = New-Object System.Net.Sockets.TcpClient('localhost', 9092); $client.Close(); exit 0 } catch { exit 1 }" >nul 2>nul

if %ERRORLEVEL% NEQ 0 (
    if %RETRY_COUNT% GEQ %MAX_RETRIES% (
        echo.
        echo ERROR: Kafka is not responding on port 9092 after %MAX_RETRIES% attempts
        echo.
        echo Troubleshooting:
        echo   - Check "EliteX Kafka" window for errors
        echo   - Check "EliteX Zookeeper" window for errors
        echo   - Ensure no other application is using port 9092
        echo   - Check Windows Firewall settings
        echo.
        echo You can still try to continue, but the backend may fail to connect.
        echo.
        pause
        goto CONTINUE_STARTUP
    )
    timeout /t 3 /nobreak >nul
    goto KAFKA_CHECK
)

echo [OK] Kafka is ready and accepting connections on port 9092!
echo.

:CONTINUE_STARTUP

REM Step 4: Build Backend
echo [STEP 4/5] Building Backend...
set PATH=C:\Program Files\Java\jdk-21\bin;%PATH%
set JAVA_HOME=C:\Program Files\Java\jdk-21
cd /d "%SCRIPT_DIR%\backend"

REM Check if Java is available
java -version >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Java not found at default location
    echo Please ensure Java 21 is installed and JAVA_HOME is set correctly
    echo.
    pause
)

call mvn clean package -DskipTests -q
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Maven build failed
    echo Check that Maven is installed and configured correctly
    pause
    exit /b 1
)
echo [OK] Backend built successfully
echo.

REM Step 5: Start Backend
echo [STEP 5/5] Starting Backend (Spring Boot)...
cd /d "%SCRIPT_DIR%\backend"
start "EliteX Backend" cmd /k "set PATH=C:\Program Files\Java\jdk-21\bin;!PATH! & set JAVA_HOME=C:\Program Files\Java\jdk-21 & java -jar target\saloon-0.0.1-SNAPSHOT.jar"
timeout /t 10 /nobreak
echo [OK] Backend started
echo.

REM Step 6: Start Frontend
echo [STEP 6/5] Starting Frontend (Angular)...
cd /d "%SCRIPT_DIR%\frontend"
if not exist "node_modules" (
    echo Installing npm dependencies...
    call npm install > npm-install.log 2>&1
)
start "EliteX Frontend" cmd /k "cd /d %SCRIPT_DIR%\frontend && npm start"
timeout /t 8 /nobreak
echo [OK] Frontend started
echo.

REM Final Status
echo ======================================================================
echo [SUCCESS] ELITEX BEAUTY SALON IS NOW RUNNING!
echo ======================================================================
echo.
echo Services are available at:
echo   Frontend:     http://localhost:4200
echo   Backend API:  http://localhost:8080
echo   Kafka:        localhost:9092
echo.
echo Active Windows:
echo   - EliteX Zookeeper   (Port 2181)
echo   - EliteX Kafka       (Port 9092)
echo   - EliteX Backend     (Port 8080)
echo   - EliteX Frontend    (Port 4200)
echo.
echo To stop all services:
echo   Close all the command windows that opened
echo.
echo Logs:
echo   Zookeeper:  Check "EliteX Zookeeper" window
echo   Kafka:      Check "EliteX Kafka" window
echo   Backend:    Check "EliteX Backend" window
echo   Frontend:   Check "EliteX Frontend" window
echo.
echo IMPORTANT: Keep all windows open while using the application!
echo.
pause