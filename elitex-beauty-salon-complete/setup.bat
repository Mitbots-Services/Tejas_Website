@echo off
REM EliteX Beauty Salon - One-Command Setup Script (Windows)

setlocal enabledelayexpansion

echo.
echo 🚀 EliteX Beauty Salon Setup
echo ==============================

REM Check Docker
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker not found. Please install Docker Desktop.
    exit /b 1
)

REM Setup environment
if not exist .env (
    echo 📋 Creating .env file from .env.sample...
    copy .env.sample .env
    echo ⚠️  Edit .env with your Stripe API key, JWT secret, and mail credentials.
    echo    Then run: docker-compose up --build
    exit /b 0
)

echo ✅ .env file found

REM Build and run
echo 🐳 Building and starting services...
docker-compose down 2>nul
docker-compose up --build -d

REM Wait for services
echo ⏳ Waiting for services to start...
timeout /t 5 /nobreak

echo.
echo ✨ Setup complete!
echo 📱 Frontend: http://localhost:4200
echo 🔌 Backend: http://localhost:8080
echo 📊 Admin: http://localhost:4200/admin
echo.
echo View logs: docker-compose logs -f
echo Stop services: docker-compose down
