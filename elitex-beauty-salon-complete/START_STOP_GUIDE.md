# EliteX Beauty Salon - Start & Stop Scripts

## Overview

Complete automation scripts to start, stop, and monitor all services in the EliteX Beauty Salon application.

---

## 📋 Available Scripts

### Linux/macOS

| Script | Purpose |
|--------|---------|
| `start-all.sh` | Start all services (Kafka, Backend, Frontend) |
| `stop-all.sh` | Stop all services gracefully |
| `status.sh` | Check status of all services |

### Windows

| Script | Purpose |
|--------|---------|
| `start-all.bat` | Start all services (Kafka, Backend, Frontend) |
| `stop-all.bat` | Stop all services gracefully |
| `status.bat` | Check status of all services |

---

## 🚀 Quick Start

### Start Everything

**Linux/macOS:**
```bash
bash start-all.sh
```

**Windows:**
```batch
start-all.bat
```

This will:
1. ✓ Start Kafka & Zookeeper (Docker)
2. ✓ Build Backend (Maven)
3. ✓ Start Backend (Spring Boot)
4. ✓ Start Frontend (Angular)
5. ✓ Verify all services

### Stop Everything

**Linux/macOS:**
```bash
bash stop-all.sh
```

**Windows:**
```batch
stop-all.bat
```

This will:
1. ✓ Stop Frontend (npm)
2. ✓ Stop Backend (Java)
3. ✓ Stop Kafka & Zookeeper (Docker)

### Check Status

**Linux/macOS:**
```bash
bash status.sh
```

**Windows:**
```batch
status.bat
```

This will:
1. ✓ Check all port availability
2. ✓ List running processes
3. ✓ Show quick links
4. ✓ Display summary

---

## 📊 Services Started

### 1. Kafka & Zookeeper (Docker)
- **Zookeeper**: Port 2181
- **Kafka Broker**: Port 9092
- **Docker Compose**: `docker-compose.kafka.yml`

### 2. Backend (Spring Boot)
- **Port**: 8080
- **URL**: http://localhost:8080
- **API**: http://localhost:8080/api/services
- **Swagger**: http://localhost:8080/swagger-ui.html
- **H2 Console**: http://localhost:8080/h2-console

### 3. Frontend (Angular)
- **Port**: 4200
- **URL**: http://localhost:4200
- **Node**: npm

---

## 📂 How It Works

### start-all.sh / start-all.bat

```
Step 1: Docker Compose Check
   └─ Create docker-compose.kafka.yml if missing
   └─ Start Kafka & Zookeeper containers

Step 2: Maven Build
   └─ cd backend
   └─ mvn clean package -DskipTests
   └─ Creates backend/target/saloon-*.jar

Step 3: Backend Launch
   └─ java -jar backend/target/saloon-*.jar
   └─ Logs: backend.log
   └─ PID: backend.pid (Linux/macOS only)

Step 4: Frontend Launch
   └─ npm install (if needed)
   └─ npm start
   └─ Logs: frontend.log
   └─ PID: frontend.pid (Linux/macOS only)

Step 5: Verification
   └─ Check all ports
   └─ Display service URLs
   └─ Show log locations
```

### stop-all.sh / stop-all.bat

```
Step 1: Kill Frontend
   └─ Stop npm processes
   └─ Close window (Windows)

Step 2: Kill Backend
   └─ Stop Java processes
   └─ Close window (Windows)

Step 3: Stop Docker
   └─ docker-compose down
   └─ Stops Kafka & Zookeeper
```

### status.sh / status.bat

```
Check Port Availability:
   └─ Zookeeper (2181)
   └─ Kafka (9092)
   └─ Backend (8080)
   └─ Frontend (4200)

Check Processes:
   └─ Java processes
   └─ npm processes
   └─ Docker containers

Display Summary:
   └─ Running services count
   └─ Service URLs
   └─ Useful commands
```

---

## 🔍 Monitoring

### View Backend Logs

**Linux/macOS:**
```bash
tail -f backend.log
```

**Windows:**
Check the "EliteX Backend" window that opens

### View Frontend Logs

**Linux/macOS:**
```bash
tail -f frontend.log
```

**Windows:**
Check the "EliteX Frontend" window that opens

### View Docker Logs

```bash
# Kafka
docker logs elitex-kafka

# Zookeeper
docker logs elitex-zookeeper
```

---

## 🆘 Troubleshooting

### Services Won't Start

**Check Status:**
```bash
bash status.sh  # Linux/macOS
status.bat      # Windows
```

### Port Already in Use

**Find and Kill Process:**

Linux/macOS:
```bash
# Find process on port 8080
lsof -i :8080
kill -9 <PID>
```

Windows:
```batch
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

### Docker Not Installed

**Install Docker:**
- Download from: https://www.docker.com/products/docker-desktop
- After install, restart terminal/command prompt

### Maven Build Fails

**Check Java:**
```bash
java -version
# Should be Java 21 or later
```

**Manual Build:**
```bash
cd backend
mvn clean package -DskipTests
```

### Dependencies Issues

**Clear Cache:**

Linux/macOS:
```bash
cd frontend
rm -rf node_modules
npm install
```

Windows:
```batch
cd frontend
rmdir /s /q node_modules
npm install
```

---

## 📋 Step-by-Step Guide

### First Time Setup

```bash
# 1. Navigate to project directory
cd elitex-beauty-salon-complete

# 2. Start all services
bash start-all.sh                    # Linux/macOS
start-all.bat                         # Windows

# 3. Wait 30 seconds for services to fully start
# 4. Check status
bash status.sh                        # Linux/macOS
status.bat                            # Windows

# 5. Access services
# Frontend: http://localhost:4200
# API: http://localhost:8080/api/services
```

### Daily Startup

```bash
# 1. Start services
bash start-all.sh   # Linux/macOS
start-all.bat       # Windows

# 2. Verify (optional)
bash status.sh      # Linux/macOS
status.bat          # Windows

# 3. Access http://localhost:4200
```

### Shutdown

```bash
# Stop all services
bash stop-all.sh    # Linux/macOS
stop-all.bat        # Windows

# Everything will be cleanly stopped
```

---

## 🔐 Security Notes

### Default Credentials

- **Frontend**: No authentication required
- **Backend**: JWT tokens for API
- **H2 Console**: Default credentials (see application.properties)

### Before Production

1. Change default passwords
2. Enable SSL/TLS for Kafka
3. Configure authentication
4. Update CORS settings
5. Enable API security

---

## 📈 Resource Requirements

### Minimum System Requirements

- **Memory**: 4GB RAM
- **Disk**: 5GB free space
- **CPU**: 2 cores
- **Docker**: Installed and running

### Recommended System Requirements

- **Memory**: 8GB RAM
- **Disk**: 10GB free space
- **CPU**: 4 cores
- **Docker**: Latest version

---

## 🔧 Advanced Usage

### Custom Port Configuration

Edit `application.properties`:
```properties
server.port=8081        # Change backend port
```

Edit `angular.json`:
```json
"serve": {
  "options": {
    "port": 4201        // Change frontend port
  }
}
```

### Environment Variables

**Linux/macOS:**
```bash
export JAVA_HOME=/path/to/java21
export KAFKA_BROKER=your-broker:9092
bash start-all.sh
```

**Windows:**
```batch
set JAVA_HOME=C:\Program Files\Java\jdk-21
set KAFKA_BROKER=your-broker:9092
start-all.bat
```

### Docker Cleanup

```bash
# Remove Kafka containers
docker-compose -f docker-compose.kafka.yml down -v

# Remove all EliteX containers
docker ps -a | grep elitex | awk '{print $1}' | xargs docker rm

# Remove unused images
docker image prune
```

---

## 📊 Service Information

### Kafka (Docker)
- **Image**: confluentinc/cp-kafka:7.5.0
- **Network**: elitex-network (bridge)
- **Data**: Anonymous volume (not persistent)
- **Logs**: `docker logs elitex-kafka`

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.2.5
- **Language**: Java 21
- **Build**: Maven 3.8.6
- **Database**: H2 (in-memory/file-based)

### Frontend (Angular)
- **Framework**: Angular 18.2.0
- **Language**: TypeScript
- **Build**: npm/ng
- **Package Manager**: npm

---

## 🎯 Common Workflows

### Development Workflow

```bash
# Morning: Start everything
bash start-all.sh

# During day: Check status anytime
bash status.sh

# Evening: Stop everything
bash stop-all.sh
```

### Debugging Backend

```bash
# 1. Stop all
bash stop-all.sh

# 2. Start Kafka only
docker-compose -f docker-compose.kafka.yml up -d

# 3. Run backend with IDE debugger
# Use your IDE (VS Code, IntelliJ) with debug mode

# 4. Stop when done
bash stop-all.sh
```

### Testing Frontend Only

```bash
# 1. Start backend and Kafka
bash start-all.sh

# 2. In separate terminal, run frontend with ng serve
cd frontend
ng serve --open

# 3. Test changes in real-time
```

---

## 📞 Support

### Verify Installation

```bash
# Check Java
java -version

# Check Docker
docker --version

# Check npm
npm --version

# Check Maven
mvn --version
```

### Common Ports

| Port | Service | Status Check |
|------|---------|--------------|
| 2181 | Zookeeper | `netstat -ano \| findstr :2181` |
| 9092 | Kafka | `netstat -ano \| findstr :9092` |
| 8080 | Backend | `netstat -ano \| findstr :8080` |
| 4200 | Frontend | `netstat -ano \| findstr :4200` |

---

## 🎓 Learning Resources

- [Kafka Documentation](https://kafka.apache.org/)
- [Spring Boot Guides](https://spring.io/guides)
- [Angular Documentation](https://angular.io/docs)
- [Docker Documentation](https://docs.docker.com/)

---

## 📝 Notes

- Scripts create log files: `backend.log`, `frontend.log`
- PID files created on Linux/macOS: `backend.pid`, `frontend.pid`
- Docker containers are named: `elitex-kafka`, `elitex-zookeeper`
- Docker network created: `elitex-network`
- All scripts are bash/batch, no external dependencies

---

**Created**: December 2025
**Version**: 1.0
**Status**: Production Ready ✅
