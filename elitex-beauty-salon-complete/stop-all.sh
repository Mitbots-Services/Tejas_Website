#!/bin/bash
# EliteX Beauty Salon - Complete Shutdown Script (Linux/macOS)

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
echo "║     ⏹️  ELITEX BEAUTY SALON - SHUTDOWN SCRIPT             ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Step 1: Stop Frontend
echo -e "${BLUE}[STEP 1/3] Stopping Frontend (Angular)...${NC}"
if [ -f "$SCRIPT_DIR/frontend.pid" ]; then
    FRONTEND_PID=$(cat "$SCRIPT_DIR/frontend.pid")
    if ps -p $FRONTEND_PID > /dev/null 2>&1; then
        kill $FRONTEND_PID
        sleep 2
        echo -e "${GREEN}✓ Frontend stopped (PID: $FRONTEND_PID)${NC}"
    fi
    rm "$SCRIPT_DIR/frontend.pid"
else
    pkill -f "npm.*start" || true
    echo -e "${GREEN}✓ Frontend processes stopped${NC}"
fi

# Step 2: Stop Backend
echo -e "${BLUE}[STEP 2/3] Stopping Backend (Spring Boot)...${NC}"
if [ -f "$SCRIPT_DIR/backend.pid" ]; then
    BACKEND_PID=$(cat "$SCRIPT_DIR/backend.pid")
    if ps -p $BACKEND_PID > /dev/null 2>&1; then
        kill $BACKEND_PID
        sleep 2
        echo -e "${GREEN}✓ Backend stopped (PID: $BACKEND_PID)${NC}"
    fi
    rm "$SCRIPT_DIR/backend.pid"
else
    pkill -f "java.*saloon" || true
    echo -e "${GREEN}✓ Backend processes stopped${NC}"
fi

# Step 3: Stop Kafka & Zookeeper
echo -e "${BLUE}[STEP 3/3] Stopping Kafka & Zookeeper...${NC}"
if [ -f "$SCRIPT_DIR/docker-compose.kafka.yml" ]; then
    docker-compose -f "$SCRIPT_DIR/docker-compose.kafka.yml" down
    echo -e "${GREEN}✓ Kafka & Zookeeper stopped${NC}"
else
    echo -e "${YELLOW}⚠ docker-compose.kafka.yml not found${NC}"
fi

echo ""
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ ALL SERVICES STOPPED SUCCESSFULLY!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "To start again, run:"
echo -e "  ${YELLOW}bash start-all.sh${NC}"
echo ""
