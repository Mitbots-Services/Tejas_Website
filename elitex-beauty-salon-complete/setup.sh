#!/bin/bash
# EliteX Beauty Salon - One-Command Setup Script

set -e

echo "🚀 EliteX Beauty Salon Setup"
echo "=============================="

# Check dependencies
if ! command -v docker &> /dev/null; then
    echo "❌ Docker not found. Please install Docker Desktop."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "⚠️  docker-compose not found. Using 'docker compose' instead."
    DOCKER_COMPOSE="docker compose"
else
    DOCKER_COMPOSE="docker-compose"
fi

# Setup environment
if [ ! -f .env ]; then
    echo "📋 Creating .env file from .env.sample..."
    cp .env.sample .env
    echo "⚠️  Edit .env with your Stripe API key, JWT secret, and mail credentials."
    echo "   Then run: $DOCKER_COMPOSE up --build"
    exit 0
fi

echo "✅ .env file found"

# Build and run
echo "🐳 Building and starting services..."
$DOCKER_COMPOSE down 2>/dev/null || true
$DOCKER_COMPOSE up --build -d

# Wait for services
echo "⏳ Waiting for services to start..."
sleep 5

# Check backend health
echo "🔍 Checking backend health..."
for i in {1..30}; do
    if curl -s http://localhost:8080/actuator/health &>/dev/null; then
        echo "✅ Backend is running on http://localhost:8080"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "⚠️  Backend startup taking longer than expected..."
    fi
    sleep 1
done

echo ""
echo "✨ Setup complete!"
echo "📱 Frontend: http://localhost:4200"
echo "🔌 Backend: http://localhost:8080"
echo "📊 Admin: http://localhost:4200/admin"
echo ""
echo "View logs: $DOCKER_COMPOSE logs -f"
echo "Stop services: $DOCKER_COMPOSE down"
