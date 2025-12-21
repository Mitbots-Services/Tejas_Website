#!/bin/bash
# EliteX Beauty Salon - Complete Startup Script (Linux/macOS)

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║     🚀 ELITEX BEAUTY SALON - STARTUP SCRIPT               ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Check for Docker
if ! command -v docker &> /dev/null; then
    echo -e "${RED}✗ Docker is not installed${NC}"
    echo "  Please install Docker Desktop from: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Function to check if service is running
is_running() {
    local port=$1
    nc -z localhost $port 2>/dev/null && return 0 || return 1
}

# Step 1: Start Kafka & Zookeeper
echo -e "${BLUE}[STEP 1/5] Starting Kafka & Zookeeper...${NC}"
if [ ! -f "$SCRIPT_DIR/docker-compose.kafka.yml" ]; then
    echo -e "${YELLOW}Creating docker-compose.kafka.yml...${NC}"
    cat > "$SCRIPT_DIR/docker-compose.kafka.yml" << 'EOF'
version: '3.8'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    container_name: elitex-zookeeper
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
    ports:
      - "2181:2181"
    networks:
      - elitex-network

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    container_name: elitex-kafka
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: 'true'
    networks:
      - elitex-network

networks:
  elitex-network:
    driver: bridge
EOF
fi

docker-compose -f "$SCRIPT_DIR/docker-compose.kafka.yml" up -d
sleep 5
echo -e "${GREEN}✓ Kafka & Zookeeper started${NC}"

# Step 2: Build Backend
echo -e "${BLUE}[STEP 2/5] Building Backend...${NC}"
cd "$SCRIPT_DIR/backend"
export PATH="/usr/lib/jvm/java-21-openjdk/bin:$PATH"
export JAVA_HOME="/usr/lib/jvm/java-21-openjdk"
mvn clean package -DskipTests -q
echo -e "${GREEN}✓ Backend built successfully${NC}"

# Step 3: Start Backend
echo -e "${BLUE}[STEP 3/5] Starting Backend (Spring Boot)...${NC}"
cd "$SCRIPT_DIR/backend"
java -jar target/saloon-0.0.1-SNAPSHOT.jar > "$SCRIPT_DIR/backend.log" 2>&1 &
BACKEND_PID=$!
echo $BACKEND_PID > "$SCRIPT_DIR/backend.pid"
sleep 10
echo -e "${GREEN}✓ Backend started (PID: $BACKEND_PID)${NC}"

# Step 4: Start Frontend
echo -e "${BLUE}[STEP 4/5] Starting Frontend (Angular)...${NC}"
cd "$SCRIPT_DIR/frontend"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing npm dependencies...${NC}"
    npm install > "$SCRIPT_DIR/frontend-install.log" 2>&1
fi
npm start > "$SCRIPT_DIR/frontend.log" 2>&1 &
FRONTEND_PID=$!
echo $FRONTEND_PID > "$SCRIPT_DIR/frontend.pid"
sleep 8
echo -e "${GREEN}✓ Frontend started (PID: $FRONTEND_PID)${NC}"

# Step 5: Verification
echo -e "${BLUE}[STEP 5/5] Verifying Services...${NC}"
sleep 3

SERVICES_UP=0

if is_running 9092; then
    echo -e "${GREEN}✓ Kafka (port 9092)${NC}"
    ((SERVICES_UP++))
else
    echo -e "${YELLOW}⚠ Kafka (port 9092) - Not responding yet${NC}"
fi

if is_running 8080; then
    echo -e "${GREEN}✓ Backend API (port 8080)${NC}"
    ((SERVICES_UP++))
else
    echo -e "${YELLOW}⚠ Backend (port 8080) - Starting...${NC}"
fi

if is_running 4200; then
    echo -e "${GREEN}✓ Frontend (port 4200)${NC}"
    ((SERVICES_UP++))
else
    echo -e "${YELLOW}⚠ Frontend (port 4200) - Starting...${NC}"
fi

echo ""
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ ELITEX BEAUTY SALON IS STARTING UP!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "Services will be available at:"
echo -e "  ${BLUE}Frontend:     http://localhost:4200${NC}"
echo -e "  ${BLUE}Backend API:  http://localhost:8080${NC}"
echo -e "  ${BLUE}Kafka:        localhost:9092${NC}"
echo ""
echo -e "To stop all services, run:"
echo -e "  ${YELLOW}bash stop-all.sh${NC}"
echo ""
echo -e "Logs:"
echo -e "  ${BLUE}Backend: tail -f $SCRIPT_DIR/backend.log${NC}"
echo -e "  ${BLUE}Frontend: tail -f $SCRIPT_DIR/frontend.log${NC}"
echo ""
