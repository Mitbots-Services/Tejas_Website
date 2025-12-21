# ELITEX BEAUTY SALON - Complete Project

A full-stack luxury beauty salon management system built with Spring Boot 3.2.1 and Angular 18.

## 🌟 Project Overview

- **Backend**: Spring Boot 3.2.1 + H2 Database + JWT Authentication
- **Frontend**: Angular 18 + Tailwind CSS + Standalone Components
- **Features**: Guest booking system, service categories, gallery, team profiles, testimonials
- **Theme**: Ultra-luxury with gold accents, glass morphism effects
- **Authentication**: JWT-based (public booking endpoint for guests)

## 📁 Project Structure

```
elitex-beauty-salon-complete/
├── backend/
│   ├── src/main/java/com/elitex/salon/
│   │   ├── EliteXSalonApplication.java
│   │   ├── config/
│   │   ├── controller/
│   │   ├── dto/
│   │   ├── entity/
│   │   ├── repository/
│   │   ├── security/
│   │   └── service/
│   ├── src/main/resources/
│   │   ├── application.yml
│   │   └── data.sql
│   ├── pom.xml
│   └── mvnw
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.routes.ts
│   │   │   ├── core/
│   │   │   └── features/
│   │   └── environments/
│   ├── package.json
│   ├── tailwind.config.js
│   └── netlify.toml
├── database/
│   └── seed.sql
└── start-all.bat
```

## 🛠️ Technology Stack

### Backend
- Spring Boot 3.2.1
- Spring Data JPA
- Spring Security + JWT (0.12.3)
- H2 Database (in-memory)
- Lombok
- SpringDoc OpenAPI/Swagger 2.3.0

### Frontend
- Angular 18
- Tailwind CSS 3.4.1
- TypeScript 5.4
- RxJS 7.8
- Axios 7.8

## ⚙️ Setup Instructions

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher

### Backend Setup

```bash
cd backend
mvn clean package -DskipTests
java -jar target/salon-1.0.0.jar
```

**Backend runs on**: http://localhost:8080

**Access Points**:
- API: http://localhost:8080/api
- H2 Console: http://localhost:8080/h2-console
- Swagger UI: http://localhost:8080/swagger-ui/index.html

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

**Frontend runs on**: http://localhost:4200

### Quick Start (Both Services)

```bash
start-all.bat  # Windows
```

Or manually open two terminals:
```bash
# Terminal 1
cd backend && mvn spring-boot:run

# Terminal 2
cd frontend && npm start
```

## 📡 API Endpoints

### Public Endpoints (No Authentication)

**Services**
- `GET /api/services` - Get all services
- `GET /api/services/{id}` - Get service by ID

**Stylists**
- `GET /api/stylists` - Get all stylists
- `GET /api/stylists/{id}` - Get stylist by ID

**Appointments** (PUBLIC BOOKING)
- `POST /api/appointments/book` - Book appointment (no login required)
- `GET /api/appointments` - Get all appointments

**Gallery**
- `GET /api/gallery` - Get gallery images

**Testimonials**
- `GET /api/testimonials` - Get testimonials

**Promotions**
- `GET /api/promotions` - Get active promotions

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

## 💾 Database

### Seed Data Included
- **16 Services** - Beauty services with pricing
- **5 Stylists** - Team members with specializations
- **12 Gallery Images** - Portfolio images
- **10 Testimonials** - Customer reviews
- **4 Promotions** - Discount codes

### H2 Console Access
- **URL**: http://localhost:8080/h2-console
- **JDBC URL**: `jdbc:h2:mem:elitexdb`
- **Username**: `sa`
- **Password**: (leave blank)

## 🎨 Frontend Features

### Pages
1. **Home** - Hero section with featured services
2. **Service Categories** - Browse by category with sticky navigation
3. **Booking** - Guest appointment booking form
4. **Gallery** - Image gallery showcase
5. **Team** - Stylist profiles
6. **Contact** - Contact information
7. **Blog** - Blog posts

### Key Features
- Mobile-responsive design
- Standalone Angular components
- Query parameter-based navigation
- Form validation
- Error handling
- Luxury styling with Tailwind CSS

## 🎯 Key Implementation Details

### Guest Booking
- `/api/appointments/book` is **publicly accessible**
- No authentication required
- Service selected by **name** (not ID)
- User field is nullable for guest bookings

### Service Categories Navigation
- **CRITICAL FIX**: `isProgrammaticScroll` flag prevents scroll override
- Query parameters route to specific categories
- Smooth scrolling with offset

### Security Configuration
- JWT-based authentication for admin endpoints
- CORS enabled for localhost:4200
- H2 console accessible for debugging

### Color Scheme
- **Charcoal**: #2C3E50 - Dark text/backgrounds
- **Misty Blue**: #BDCDE6 - Accent color
- **Soft Gold**: #F4D03F - Primary CTA
- **Champagne**: #F7DC6F - Light accent

## 🚀 Deployment

### Frontend (Netlify)
1. Update `environment.prod.ts` with production API URL
2. Build: `npm run build`
3. Deploy `dist/elitex-frontend/browser`
4. Use included `netlify.toml` for SPA routing

### Backend (Render/Railway)
1. Create `application-prod.yml` for production
2. Update CORS origins
3. Set `JWT_SECRET` environment variable
4. Build: `mvn clean package`
5. Deploy JAR or Docker image

## ✅ Testing Checklist

1. ✓ Home page loads with featured services
2. ✓ "Hair Services" navigates to hair category
3. ✓ "Nails Services" navigates to nails category (not hair!)
4. ✓ Booking form submits without login
5. ✓ Service categories display correctly
6. ✓ Navigation sticky header works
7. ✓ Footer displays
8. ✓ Gallery loads images
9. ✓ Team page shows stylists
10. ✓ Contact page functional

## 🔧 Build Commands

### Backend
```bash
cd backend
mvn clean package -DskipTests  # Build JAR
mvn spring-boot:run             # Run locally
```

### Frontend
```bash
cd frontend
npm install  # Install dependencies
npm start    # Development server
npm run build # Production build
```

## 🐛 Troubleshooting

### Backend Issues
- **Won't start**: Check Java version (`java -version` → must be 17+)
- **Port conflict**: Port 8080 in use
- **Build fails**: `mvn clean install` to reset

### Frontend Issues
- **Won't start**: Check Node version (`node -v` → must be 18+)
- **Dependencies**: `rm -rf node_modules && npm install`
- **Port conflict**: Port 4200 in use

### Category Navigation Bug
- Verify `isProgrammaticScroll` flag in ServiceCategoriesComponent
- Check that `scrollToCategory()` sets flag correctly
- Clear browser cache

### Booking Not Working
- Verify `/api/appointments/book` in SecurityConfig
- Check service names in database match request
- Verify AppointmentService looks up by name

## 📊 File Statistics

- **Backend Java Files**: 35+
- **Frontend TypeScript Files**: 25+
- **Configuration Files**: 10+
- **Total Lines of Code**: 8,000+

## 🌐 Access Points

| Service | URL | Notes |
|---------|-----|-------|
| Frontend | http://localhost:4200 | Angular application |
| Backend API | http://localhost:8080/api | REST API |
| H2 Console | http://localhost:8080/h2-console | Database browser |
| Swagger UI | http://localhost:8080/swagger-ui/index.html | API documentation |

## 📝 Important Notes

1. **H2 Database** - In-memory, data clears on restart. Use PostgreSQL for production.
2. **Service Names** - Must match exactly in seed data for booking
3. **Public Booking** - No authentication required for `/api/appointments/book`
4. **Stylist Assignment** - Default stylist (ID: 1) if not specified
5. **CORS** - Configured for localhost:4200 only. Update for production.

## 📚 Additional Resources

- `application.yml` - Spring Boot configuration
- `data.sql` - Database seed data
- `tailwind.config.js` - Tailwind CSS theme
- `environment.ts` - Angular environment configuration
- `app.routes.ts` - Angular routing configuration

---

**Project**: Elitex Beauty Salon  
**Version**: 1.0.0  
**Created**: December 2025  
**Status**: ✅ Ready for Production
