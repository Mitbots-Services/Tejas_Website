@echo off
REM Local backend startup script (requires PostgreSQL running separately)
REM Usage: run-backend-local.bat

setlocal enabledelayedexpansion

REM Set Java and environment variables
set JAVA_HOME=C:\Program Files\Java\jdk-21
set PATH=%JAVA_HOME%\bin;%PATH%

REM Backend configuration (adjust if MySQL is running on different port/host)
set SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/elitex_salon
set SPRING_DATASOURCE_USERNAME=root
set SPRING_DATASOURCE_PASSWORD=password
set JWT_SECRET=elitex-secret-jwt-key-change-in-production
set STRIPE_API_KEY=your-stripe-key-here
set SPRING_MAIL_USERNAME=your-email@gmail.com
set SPRING_MAIL_PASSWORD=your-app-password
set FRONTEND_URL=http://localhost:4200

echo.
echo ==================================================
echo EliteX Beauty Salon - Backend Service
echo ==================================================
echo.
echo Starting Spring Boot application...
echo Backend will run on: http://localhost:8080
echo Database: %SPRING_DATASOURCE_URL%
echo.
echo IMPORTANT: Ensure MySQL is running locally!
echo.

REM Run the JAR file
cd /d "d:\projects\elitex saloon\elitex-beauty-salon-complete\backend"
java -jar target\saloon-0.0.1-SNAPSHOT.jar

endlocal
