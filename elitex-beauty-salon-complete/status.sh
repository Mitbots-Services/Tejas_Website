#!/bin/bash
# EliteX Beauty Salon - Status Check Script (Linux/macOS)

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║     📊 ELITEX BEAUTY SALON - STATUS CHECK                 ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Function to check if service is running
check_service() {
    local name=$1
    local port=$2
    local url=$3
    
    if nc -z localhost $port 2>/dev/null; then
        echo -e "${GREEN}✓${NC} $name (port $port)"
        if [ -n "$url" ]; then
            echo "  ${BLUE}URL: $url${NC}"
        fi
        return 0
    else
        echo -e "${RED}✗${NC} $name (port $port) - Not responding"
        return 1
    fi
}

# Check all services
echo ""
echo -e "${BLUE}Service Status:${NC}"
echo "─────────────────────────────────────────────────────────"

SERVICES_UP=0

if check_service "Zookeeper" 2181; then
    ((SERVICES_UP++))
fi

if check_service "Kafka Broker" 9092; then
    ((SERVICES_UP++))
fi

if check_service "Backend API" 8080 "http://localhost:8080/api/services"; then
    ((SERVICES_UP++))
fi

if check_service "Frontend" 4200 "http://localhost:4200"; then
    ((SERVICES_UP++))
fi

echo "─────────────────────────────────────────────────────────"
echo ""

# Summary
echo -e "${BLUE}Summary:${NC}"
echo "  Services UP: $SERVICES_UP / 4"

if [ $SERVICES_UP -eq 4 ]; then
    echo -e "${GREEN}✓ All services are running!${NC}"
    echo ""
    echo -e "Quick Links:"
    echo -e "  ${BLUE}Frontend:    http://localhost:4200${NC}"
    echo -e "  ${BLUE}API Docs:    http://localhost:8080/swagger-ui.html${NC}"
    echo -e "  ${BLUE}H2 Console:  http://localhost:8080/h2-console${NC}"
elif [ $SERVICES_UP -gt 0 ]; then
    echo -e "${YELLOW}⚠ Some services are still starting...${NC}"
    echo "  Check back in a few seconds"
else
    echo -e "${RED}✗ Services are not running${NC}"
    echo ""
    echo -e "To start services, run:"
    echo -e "  ${YELLOW}bash start-all.sh${NC}"
fi

echo ""
echo -e "${BLUE}Process Information:${NC}"
echo "─────────────────────────────────────────────────────────"

# Check for Java processes
JAVA_PROCESSES=$(pgrep -f "java.*saloon" | wc -l)
echo -e "Backend Java processes: ${GREEN}$JAVA_PROCESSES${NC}"

# Check for npm processes
NPM_PROCESSES=$(pgrep -f "npm.*start" | wc -l)
echo -e "Frontend npm processes: ${GREEN}$NPM_PROCESSES${NC}"

# Check for Docker containers
DOCKER_RUNNING=$(docker ps --filter "name=elitex" --format "{{.Names}}" 2>/dev/null | wc -l)
echo -e "Docker containers: ${GREEN}$DOCKER_RUNNING${NC}"

echo ""
echo -e "${BLUE}Useful Commands:${NC}"
echo "─────────────────────────────────────────────────────────"
echo -e "  ${YELLOW}bash start-all.sh${NC}           - Start all services"
echo -e "  ${YELLOW}bash stop-all.sh${NC}            - Stop all services"
echo -e "  ${YELLOW}bash status.sh${NC}              - Check status (this script)"
echo -e "  ${YELLOW}tail -f backend.log${NC}         - View backend logs"
echo -e "  ${YELLOW}tail -f frontend.log${NC}        - View frontend logs"
echo ""
