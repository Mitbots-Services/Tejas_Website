#!/bin/bash
# Local backend startup script (requires PostgreSQL running separately)
# Usage: ./run-backend-local.sh

export JAVA_HOME="/usr/lib/jvm/java-21-openjdk" # Adjust path for your system
export PATH="$JAVA_HOME/bin:$PATH"

# Backend configuration
export SPRING_DATASOURCE_URL="jdbc:postgresql://localhost:5432/elitex_salon"
export SPRING_DATASOURCE_USERNAME="postgres"
export SPRING_DATASOURCE_PASSWORD="postgres"
export JWT_SECRET="elitex-secret-jwt-key-change-in-production"
export STRIPE_API_KEY="your-stripe-key-here"
export SPRING_MAIL_USERNAME="your-email@gmail.com"
export SPRING_MAIL_PASSWORD="your-app-password"
export FRONTEND_URL="http://localhost:4200"

echo ""
echo "=================================================="
echo "EliteX Beauty Salon - Backend Service"
echo "=================================================="
echo ""
echo "Starting Spring Boot application..."
echo "Backend will run on: http://localhost:8080"
echo "Database: $SPRING_DATASOURCE_URL"
echo ""
echo "IMPORTANT: Ensure PostgreSQL is running locally!"
echo ""

cd "$(dirname "$0")/backend"
java -jar target/saloon-0.0.1-SNAPSHOT.jar
