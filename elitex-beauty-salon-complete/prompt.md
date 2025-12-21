

# ELITEX BEAUTY SALON - COMPLETE PROJECT REPLICATION PROMPT

Use this prompt with Claude Sonnet to recreate the entire Elitex Beauty Salon project from scratch.

## PROJECT OVERVIEW

Create a full-stack luxury beauty salon management system with:
- **Backend**: Spring Boot 3.2.1 + H2 Database
- **Frontend**: Angular 18 + Tailwind CSS
- **Features**: Booking system, service categories, gallery, team profiles, blog
- **Theme**: Ultra-luxury with gold accents, glass morphism effects
- **Authentication**: JWT-based (disabled for booking endpoint)

## STEP 1: PROJECT STRUCTURE

Create the following directory structure:
```
demo/
├── elitex-backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/elitex/salon/
│   │   │   │   ├── EliteXSalonApplication.java
│   │   │   │   ├── config/
│   │   │   │   │   ├── CorsConfig.java
│   │   │   │   │   └── SecurityConfig.java
│   │   │   │   ├── controller/
│   │   │   │   │   ├── AppointmentController.java
│   │   │   │   │   ├── AuthController.java
│   │   │   │   │   ├── ServiceController.java
│   │   │   │   │   ├── GalleryController.java
│   │   │   │   │   ├── TestimonialController.java
│   │   │   │   │   ├── PromotionController.java
│   │   │   │   │   └── StylistController.java
│   │   │   │   ├── dto/
│   │   │   │   │   ├── ApiResponse.java
│   │   │   │   │   ├── AuthResponse.java
│   │   │   │   │   ├── BookingRequest.java
│   │   │   │   │   ├── LoginRequest.java
│   │   │   │   │   └── RegisterRequest.java
│   │   │   │   ├── model/
│   │   │   │   │   ├── User.java
│   │   │   │   │   ├── Appointment.java
│   │   │   │   │   ├── Service.java
│   │   │   │   │   ├── Stylist.java
│   │   │   │   │   ├── GalleryImage.java
│   │   │   │   │   ├── Testimonial.java
│   │   │   │   │   └── Promotion.java
│   │   │   │   ├── repository/
│   │   │   │   │   ├── UserRepository.java
│   │   │   │   │   ├── AppointmentRepository.java
│   │   │   │   │   ├── ServiceRepository.java
│   │   │   │   │   ├── StylistRepository.java
│   │   │   │   │   ├── GalleryRepository.java
│   │   │   │   │   ├── TestimonialRepository.java
│   │   │   │   │   └── PromotionRepository.java
│   │   │   │   ├── security/
│   │   │   │   │   ├── JwtAuthenticationFilter.java
│   │   │   │   │   ├── JwtTokenProvider.java
│   │   │   │   │   └── UserDetailsServiceImpl.java
│   │   │   │   └── service/
│   │   │   │       ├── AppointmentService.java
│   │   │   │       └── AuthService.java
│   │   │   │       (other services)
│   │   │   └── resources/
│   │   │       ├── application.yml
│   │   │       └── data.sql
│   │   └── test/ (standard test structure)
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
└── elitex-frontend/
    ├── src/
    │   ├── app/
    │   │   ├── app.component.ts
    │   │   ├── app.routes.ts
    │   │   ├── core/
    │   │   │   ├── components/
    │   │   │   │   ├── navigation.component.ts
    │   │   │   │   └── footer.component.ts
    │   │   │   ├── interceptors/
    │   │   │   │   └── auth.interceptor.ts
    │   │   │   ├── models/
    │   │   │   │   └── models.ts
    │   │   │   └── services/
    │   │   │       ├── appointment.service.ts
    │   │   │       ├── auth.service.ts
    │   │   │       ├── content.service.ts
    │   │   │       └── service-api.service.ts
    │   │   └── features/
    │   │       ├── home/
    │   │       ├── service-categories/
    │   │       ├── booking/
    │   │       ├── gallery/
    │   │       ├── team/
    │   │       ├── blog/
    │   │       ├── contact/
    │   │       └── auth/ (login, register)
    │   │       (admin, user-dashboard)
    │   ├── environments/
    │   │   ├── environment.ts
    │   │   └── environment.prod.ts
    │   ├── assets/
    │   ├── index.html
    │   ├── main.ts
    │   ├── styles.scss
    │   ├── angular.json
    │   ├── package.json
    │   ├── tailwind.config.js
    │   ├── tsconfig.json
    │   ├── tsconfig.app.json
    │   ├── netlify.toml
    │   ├── docker-compose.yml
    │   ├── start-all.bat
    │   ├── README.md
    │   └── ARCHITECTURE.md
```

## STEP 2: BACKEND SETUP

### 2.1 Create `pom.xml` with these dependencies:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.1</version>
    </parent>

    <groupId>com.elitex</groupId>
    <artifactId>salon</artifactId>
    <version>1.0.0</version>

    <properties>
        <java.version>17</java.version>
        <jwt.version>0.12.3</jwt.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-api</artifactId>
            <version>${jwt.version}</version>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-impl</artifactId>
            <version>${jwt.version}</version>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-jackson</artifactId>
            <version>${jwt.version}</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.3.0</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

### 2.2 Create `application.yml`:

```yaml
spring:
  application:
    name: elitex-salon
  datasource:
    url: jdbc:h2:mem:elitexdb
    driver-class-name: org.h2.Driver
    username: sa
    password:

  h2:
    console:
      enabled: true
      path: /h2-console

  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
    properties:
      hibernate:
        format_sql: true
    dialect: org.hibernate.dialect.H2Dialect
    defer-datasource-initialization: true

  sql:
    init:
      mode: always
      data-locations: classpath:data.sql

server:
  port: 8080

error:
  include-message: always

jwt:
  secret: ${JWT_SECRET:elitex-salon-ultra-luxury-secret-key-2024-very-secure-and-long-key-for-jwt-token-generation}
  expiration: 86400000

cors:
  allowed-origins: http://localhost:4200, http://localhost:4200/
  allowed-methods: GET, POST, PUT, DELETE, OPTIONS
  allowed-headers: "*"
  allow-credentials: true
```

### 2.3 Key Backend Classes:

#### EliteXSalonApplication.java (Main Application)

```java
package com.elitex.salon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EliteXSalonApplication {
    public static void main(String[] args) {
        SpringApplication.run(EliteXSalonApplication.class, args);
    }
}
```

#### SecurityConfig.java (Critical Configuration)

```java
package com.elitex.salon.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**",
                                "/api/services/**",
                                "/api/stylists/**",
                                "/api/gallery/**",
                                "/api/testimonials",
                                "/api/promotions/active",
                                "/api/appointments/book", // CRITICAL: Public booking
                                "/h2-console/**",
                                "/swagger-ui/**",
                                "/v3/api-docs/**").permitAll()
                .anyRequest().authenticated()
            )
            .headers().frameOptions().disable();
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

#### BookingRequest.java (DTO for Guest Bookings)

```java
package com.elitex.salon.dto;

import lombok.Data;
import javax.validation.constraints.*;

@Data
public class BookingRequest {
    @NotBlank
    private String serviceName; // Changed from serviceId to serviceName
    
    @NotNull
    private LocalDate appointmentDate;
    
    @NotBlank
    private String timeSlot;
    
    private Long stylistId; // Optional
    
    private String notes;
    
    private String promoCode;
    
    // Guest booking fields
    @NotBlank
    private String customerName;
    
    @NotBlank
    @Email
    private String customerEmail;
    
    @NotBlank
    private String customerPhone;
}
```

#### Appointment.java (Entity with Nullable User)

```java
package com.elitex.salon.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id") // NULLABLE for guest bookings
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    private Service service;
    
    @ManyToOne
    @JoinColumn(name = "stylist_id") // NULLABLE - uses default if not specified
    private Stylist stylist;
    
    private LocalDate appointmentDate;
    private String timeSlot;
    
    @Enumerated(EnumType.STRING)
    private AppointmentStatus status = AppointmentStatus.PENDING;
    
    private String notes;
    private String promoCode;
    private Double finalPrice;
    
    // Guest booking fields
    private String customerName;
    private String customerEmail;
    private String customerPhone;
}
```

#### AppointmentService.java (Service Logic)

```java
package com.elitex.salon.service;

import com.elitex.salon.dto.BookingRequest;
import com.elitex.salon.model.*;
import com.elitex.salon.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    
    private final AppointmentRepository appointmentRepository;
    private final ServiceRepository serviceRepository;
    private final StylistRepository stylistRepository;
    
    public Appointment bookAppointment(BookingRequest request) {
        // Find service by NAME instead of ID
        Service service = serviceRepository.findByNameIgnoreCase(request.getServiceName())
            .orElseThrow(() -> new RuntimeException("Service not found: " + request.getServiceName()));
        
        // Use default stylist if not specified
        Stylist stylist = request.getStylistId() != null ?
            stylistRepository.findById(request.getStylistId())
                .orElseGet(() -> stylistRepository.findById(1L).orElse(null)) :
            stylistRepository.findById(1L).orElse(null);
        
        Double finalPrice = service.getPrice();
        
        // Apply promo code if provided
        if (request.getPromoCode() != null && !request.getPromoCode().isEmpty()) {
            // Promo code logic here
        }
        
        Appointment appointment = Appointment.builder()
            .user(null) // NULL for guest bookings
            .service(service)
            .stylist(stylist)
            .appointmentDate(request.getAppointmentDate())
            .timeSlot(request.getTimeSlot())
            .notes(request.getNotes())
            .promoCode(request.getPromoCode())
            .finalPrice(finalPrice)
            .status(AppointmentStatus.PENDING)
            .customerName(request.getCustomerName())
            .customerEmail(request.getCustomerEmail())
            .customerPhone(request.getCustomerPhone())
            .build();
        
        return appointmentRepository.save(appointment);
    }
}
```

#### ServiceRepository.java (Add findByNameIgnoreCase)

```java
package com.elitex.salon.repository;

import com.elitex.salon.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ServiceRepository extends JpaRepository<Service, Long> {
    Optional<Service> findByNameIgnoreCase(String name);
}
```

### 2.4 Create data.sql (Seed Data)

**IMPORTANT**: Users with BCrypt hashes should be COMMENTED OUT to avoid errors:

```sql
-- SERVICES DATA
INSERT INTO service (name, description, category, duration, price, featured, available, image_url) VALUES
('Women\'s Haircut', 'Professional haircut with styling', 'HAIR', 60, 800.00, true, true, 'https://images.unsplash.com/photo-1560066984-138dadb4c035'),
('Bridal Makeup', 'Complete bridal makeup package', 'BRIDAL', 120, 8000.00, true, true, 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2'),
-- Add 14 more services...

-- STYLISTS DATA
INSERT INTO stylist (name, specialization, experience, rating, available, image_url, bio) VALUES
('Sarah Johnson', 'Hair Styling Expert', 8, 4.8, true, 'https://images.unsplash.com/photo-1580489944761-15a19d654956', 'Expert in modern cuts'),
-- Add 4 more stylists...

-- GALLERY DATA
INSERT INTO gallery_image (title, description, category, image_url, featured, display_order) VALUES
('Bridal Elegance', 'Stunning bridal transformation', 'BRIDAL', 'https://images.unsplash.com/photo-1519741497674-611481863552', true, 1),
-- Add 11 more gallery images...

-- TESTIMONIALS DATA
INSERT INTO testimonial (customer_name, service_type, rating, comment, featured, verified, created_at) VALUES
('Priya Sharma', 'Bridal Makeup', 5, 'Absolutely stunning work!', true, true, CURRENT_TIMESTAMP),
-- Add 9 more testimonials...

-- PROMOTIONS DATA
INSERT INTO promotion (code, description, discount_type, discount_value, start_date, end_date, active, min_purchase, max_uses) VALUES
('WELCOME20', 'Welcome Offer 20% Off', 'PERCENTAGE', 20.00, CURRENT_DATE, DATEADD('DAY', 30, CURRENT_DATE), true, 1000.00, 100),
-- Add 3 more promotions...

-- USERS (COMMENTED OUT BCrypt hash errors)
-- INSERT INTO users (username, email, password, first_name, last_name, phone, role, enabled) VALUES
-- ('admin', 'admin@elitex.com', '$2a$10$...', 'Admin', 'User', '9876543210', 'ADMIN', true);

-- APPOINTMENTS (COMMENTED OUT Foreign key constraints)
-- INSERT INTO appointment (user_id, service_id, stylist_id,...) VALUES
```

## STEP 3: FRONTEND SETUP

### 3.1 Create package.json:

```json
{
    "name": "elitex-frontend",
    "version": "1.0.0",
    "scripts": {
        "start": "ng serve",
        "build": "ng build"
    },
    "dependencies": {
        "@angular/animations": "^18.0.0",
        "@angular/common": "^18.0.0",
        "@angular/core": "^18.0.0",
        "@angular/forms": "^18.0.0",
        "@angular/platform-browser": "^18.0.0",
        "@angular/router": "^18.0.0",
        "axios": "~7.8.0",
        "tslib": "^2.6.0",
        "zone.js": "~0.14.0"
    },
    "devDependencies": {
        "@angular/cli": "^18.0.0",
        "@angular/compiler-cli": "^18.0.0",
        "autoprefixer": "^10.4.18",
        "postcss": "^8.4.35",
        "tailwindcss": "^3.4.1",
        "typescript": "~5.4.0"
    }
}
```

### 3.2 Create `tailwind.config.js`:

```javascript
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                'charcoal': '#2C3E50',
                'misty-blue': '#BDCDE6',
                'soft-gold': '#F4D03F',
                'champagne': '#F7DC6F'
            }
        },
        fontFamily: {
            'elegant': ['Playfair Display', 'serif']
        }
    }
}
```

### 3.3 Create Environment Files:

#### environment.ts

```typescript
export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api'
};
```

#### environment.prod.ts

```typescript
export const environment = {
    production: true,
    apiUrl: 'YOUR_BACKEND_URL_HERE/api'
};
```

### 3.4 Core Services:

#### appointment.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
    private apiUrl = `${environment.apiUrl}/appointments`;
    
    constructor(private http: HttpClient) {}
    
    bookAppointment(request: BookingRequest): Observable<Appointment> {
        return this.http.post<ApiResponse<Appointment>>(`${this.apiUrl}/book`, request)
            .pipe(map(response => response.data));
    }
}
```

#### service-api.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceApiService {
    private apiUrl = `${environment.apiUrl}/services`;
    
    constructor(private http: HttpClient) {}
    
    getAllServices(): Observable<Service[]> {
        return this.http.get<ApiResponse<any>>(`${this.apiUrl}`)
            .pipe(map(response => {
                if (response.data && response.data.content) {
                    return response.data.content;
                }
                return response.data || [];
            }));
    }
}
```

#### models.ts (Core Interfaces)

```typescript
export interface BookingRequest {
    serviceName: string;
    appointmentDate: string;
    timeSlot: string;
    notes?: string;
    promoCode?: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
}

export interface Service {
    id: number;
    name: string;
    description: string;
    category: string;
    duration: number;
    price: number;
    imageUrl?: string;
    featured: boolean;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}
```

### 3.5 Navigation Component:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
        <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
            <div class="max-w-7xl mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <a routerlink="/" class="text-3xl font-elegant font-bold bg-gradient-to-r from-charcoal via-misty-blue to-charcoal bg-clip-text text-transparent">
                        Elitex Beauty Salon
                    </a>
                    <div class="hidden md:flex items-center gap-8">
                        <a routerlink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
                           class="nav-link text-charcoal hover:text-misty-blue transition-colors">Home</a>
                        <a routerlink="/service-categories" routerLinkActive="active"
                           class="nav-link text-charcoal hover:text-misty-blue transition-colors">Services</a>
                        <a routerlink="/gallery" routerLinkActive="active"
                           class="nav-link text-charcoal hover:text-misty-blue transition-colors">Gallery</a>
                        <a routerlink="/team" routerLinkActive="active"
                           class="nav-link text-charcoal hover:text-misty-blue transition-colors">Team</a>
                        <a routerlink="/contact" routerLinkActive="active"
                           class="nav-link text-charcoal hover:text-misty-blue transition-colors">Contact</a>
                        <a routerlink="/booking"
                           class="px-6 py-2 bg-gradient-to-r from-soft-gold to-champagne text-charcoal font-semibold rounded-full hover:shadow-lg transition-all">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    `
})
export class NavigationComponent {}
```

### 3.6 Footer Component:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
        <footer class="bg-charcoal text-white">
            <div class="max-w-7xl mx-auto px-6 py-12">
                <div class="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4 text-misty-blue">Elitex Beauty Salon</h3>
                        <p class="text-gray-300 text-sm">Ultra-luxury beauty services</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4 text-misty-blue">Quick Links</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a routerlink="/" class="text-gray-300 hover:text-misty-blue">Home</a></li>
                            <li><a routerlink="/service-categories" class="text-gray-300 hover:text-misty-blue">Services</a></li>
                            <li><a routerlink="/contact" class="text-gray-300 hover:text-misty-blue">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4 text-misty-blue">Contact</h4>
                        <ul class="space-y-2 text-sm text-gray-300">
                            <li>+91 98765 43210</li>
                            <li>info@elitex.com</li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; {{ currentYear }} Elitex Beauty Salon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
}
```

### 3.7 Home Component (Signature Services with Navigation):

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, NavigationComponent, FooterComponent],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    featuredServices = [
        {
            id: 'hair',
            name: 'Hair Services',
            icon: '✂️',
            description: 'Expert cuts, colors, and styling',
            image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035'
        },
        {
            id: 'nails',
            name: 'Nail Services',
            icon: '💅',
            description: 'Manicures, pedicures, nail art',
            image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371'
        },
        {
            id: 'facial',
            name: 'Facial & Skin Care',
            icon: '✨',
            description: 'Rejuvenating treatments',
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881'
        },
        {
            id: 'bridal',
            name: 'Bridal Services',
            icon: '💎',
            description: 'Complete bridal makeovers',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552'
        },
        {
            id: 'waxing',
            name: 'Waxing Services',
            icon: '🌹',
            description: 'Professional waxing treatments',
            image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937'
        },
        {
            id: 'mehandi',
            name: 'Mehandi Art',
            icon: '🎨',
            description: 'Traditional and modern designs',
            image: 'https://images.unsplash.com/photo-1610735683869-2e6c582d6640'
        }
    ];

    constructor(private router: Router) {}

    ngOnInit(): void {}

    navigateToCategory(categoryId: string): void {
        this.router.navigate(['/service-categories'], {
            queryParams: { category: categoryId }
        });
    }
}
```

### 3.8 Service Categories Component (With Query Param Navigation):

```typescript
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
    selector: 'app-service-categories',
    standalone: true,
    imports: [CommonModule, NavigationComponent, FooterComponent],
    templateUrl: './service-categories.component.html'
})
export class ServiceCategoriesComponent implements OnInit {
    isSticky = false;
    activeCategory = 'hair';
    expandedCategory: string | null = 'hair';
    isProgrammaticScroll = false; // CRITICAL FIX

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        // Handle query parameter navigation
        this.route.queryParams.subscribe(params => {
            const category = params['category'];
            if (category) {
                this.activeCategory = category;
                this.expandedCategory = category;
                setTimeout(() => this.scrollToCategory(category), 300);
            }
        });
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const offset = window.pageYOffset || document.documentElement.scrollTop || 0;
        this.isSticky = offset > 300;
        
        // CRITICAL: Don't update activeCategory during programmatic scroll
        if (!this.isProgrammaticScroll) {
            this.updateActiveCategory();
        }
    }

    scrollToCategory(categoryId: string) {
        this.isProgrammaticScroll = true; // Set flag before scrolling
        const element = document.getElementById(categoryId);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            this.activeCategory = categoryId;
            
            // Reset flag after scroll animation completes
            setTimeout(() => {
                this.isProgrammaticScroll = false;
            }, 800);
        }
    }

    updateActiveCategory() {
        const sections = this.categories.map(cat => ({
            id: cat.id,
            element: document.getElementById(cat.id)
        }));
        
        for (const section of sections) {
            if (section.element) {
                const rect = section.element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= 300) {
                    this.activeCategory = section.id;
                    break;
                }
            }
        }
    }

    categories: ServiceCategory[] = [
        {
            id: 'hair',
            name: 'Hair Services',
            icon: '✂️',
            color: '#BDCDE6',
            subCategories: [
                {
                    name: 'Hair Style',
                    items: ['Kids cuts', 'Trendy kids cut', 'U cut', 'Basic cut', 'Advance layer cuts']
                },
                {
                    name: 'Hair Colouring',
                    items: ['Global hair colouring', 'Streaking highlights', 'Root touch up']
                }
            ]
        },
        {
            id: 'nails',
            name: 'Nail Services',
            icon: '💅',
            color: '#F4D03F',
            subCategories: [
                {
                    name: 'Manicure',
                    items: ['Basic manicure', 'Gel manicure', 'French manicure']
                }
            ]
        }
        // Add all other categories (facial, waxing, bridal, mehandi, packages)...
    ];
}
```

### 3.9 Booking Component (With Backend Integration):

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../../core/services/appointment.service';
import { NavigationComponent } from '../../core/components/navigation.component';
import { FooterComponent } from '../../core/components/footer.component';

@Component({
    selector: 'app-booking',
    standalone: true,
    imports: [CommonModule, FormsModule, NavigationComponent, FooterComponent],
    templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {
    bookingData = {
        serviceName: '',
        appointmentDate: '',
        timeSlot: '',
        notes: '',
        customerName: '',
        customerEmail: '',
        customerPhone: ''
    };

    isSubmitting = false;
    bookingSuccess = false;
    bookingError = '';

    constructor(
        private appointmentService: AppointmentService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    submitBooking(confirmationMethod: string) {
        if (!this.validateForm()) return;

        this.isSubmitting = true;
        this.bookingError = '';

        const request = {
            ...this.bookingData,
            timeSlot: this.convertTo24Hour(this.bookingData.timeSlot)
        };

        this.appointmentService.bookAppointment(request).subscribe({
            next: (appointment) => {
                this.bookingSuccess = true;
                this.isSubmitting = false;
                
                // Open confirmation method
                if (confirmationMethod === 'whatsapp') {
                    this.openWhatsApp();
                } else if (confirmationMethod === 'email') {
                    this.openEmail();
                } else if (confirmationMethod === 'phone') {
                    this.openPhone();
                }
            },
            error: (error) => {
                this.bookingError = error.error.message || 'Booking failed. Please try again.';
                this.isSubmitting = false;
            }
        });
    }

    convertTo24Hour(time12h: string): string {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        
        if (hours === '12') hours = '00';
        if (modifier === 'PM') hours = String(parseInt(hours, 10) + 12);
        
        return `${hours.padStart(2, '0')}:${minutes}:00`;
    }

    validateForm(): boolean {
        return !!(this.bookingData.serviceName &&
                  this.bookingData.appointmentDate &&
                  this.bookingData.timeSlot &&
                  this.bookingData.customerName &&
                  this.bookingData.customerEmail &&
                  this.bookingData.customerPhone);
    }

    openWhatsApp() {
        const message = `Booking Confirmed!\nService: ${this.bookingData.serviceName}\nDate: ${this.bookingData.appointmentDate}\nTime: ${this.bookingData.timeSlot}`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    }

    openEmail() {
        window.location.href = `mailto:${this.bookingData.customerEmail}?subject=Booking Confirmation&body=Your booking has been confirmed.`;
    }

    openPhone() {
        window.location.href = `tel:${this.bookingData.customerPhone}`;
    }
}
```

### 3.10 App Routes:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ServiceCategoriesComponent } from './features/service-categories/service-categories.component';
import { BookingComponent } from './features/booking/booking.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { TeamComponent } from './features/team/team.component';
import { ContactComponent } from './features/contact/contact.component';
import { BlogComponent } from './features/blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'service-categories', component: ServiceCategoriesComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
    { path: '**', redirectTo: '' }
];
```

### 3.11 Netlify Deployment Config:

```toml
[build]
publish = "dist/elitex-frontend/browser"
command = "npm run build"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200

[build.environment]
NODE_VERSION = "20"
```

## STEP 4: STARTUP SCRIPTS

### Create start-all.bat (Windows):

```batch
@echo off
echo Starting Elitex Beauty Salon...
start "Backend" cmd /k "cd elitex-backend && java -jar target/salon-1.0.0.jar"
timeout /t 15
start "Frontend" cmd /k "cd elitex-frontend && npm start"
echo.
echo ===================================
echo Elitex Beauty Salon - Starting...
echo ===================================
echo.
echo Backend will start on: http://localhost:8080
echo Frontend will start on: http://localhost:4200
echo.
echo Please wait for both servers to start...
echo ===================================
```

## STEP 5: BUILD & RUN INSTRUCTIONS

### Backend:

```bash
cd elitex-backend
mvn clean package -DskipTests
java -jar target/salon-1.0.0.jar
```

### Frontend:

```bash
cd elitex-frontend
npm install
npm start
```

### Access:

```
Frontend: http://localhost:4200
Backend API: http://localhost:8080
H2 Console: http://localhost:8080/h2-console
Swagger: http://localhost:8080/swagger-ui/index.html
```

## KEY FEATURES IMPLEMENTED

1. **Guest Booking System**: No authentication required for /api/appointments/book
2. **Service Name Acceptance**: Backend accepts service names instead of IDs
3. **Query Parameter Navigation**: Home page service cards redirect to specific categories
4. **Programmatic Scroll Fix**: Category navigation works correctly without override
5. **Environment Configuration**: Dev and prod environments with configurable API URLs
6. **Netlify Ready**: Deployment configuration included
7. **Responsive Design**: Mobile-first Tailwind CSS styling
8. **Database Seeding**: 16 services, 5 stylists, 12 gallery images, 10 testimonials, 4 promotions

## CRITICAL FIXES APPLIED

1. **data.sql BCrypt Error**: Commented out users with invalid BCrypt hashes
2. **Foreign Key Violations**: Commented out appointments referencing non-existent users
3. **Duplicate Constructor**: Removed duplicate constructor in ServiceCategoriesComponent
4. **Category Navigation Bug**: Added isProgrammaticScroll flag to prevent scroll override
5. **Service Name Search**: Added findByNameIgnoreCase() to ServiceRepository
6. **Nullable User Field**: Made user field nullable in Appointment entity for guest bookings
7. **Environment Import**: All services now use environment.apiUrl instead of hardcoded localhost

## IMPORTANT NOTES

1. **Java 17+ Required**: Backend requires Java 17 or higher
2. **Node 18+ Required**: Frontend requires Node.js 18 or higher
3. **H2 Database**: In-memory database (data cleared on restart) - use PostgreSQL for production
4. **CORS Configuration**: Update allowed-origins in application.yml for production
5. **JWT Secret**: Use environment variable JWT_SECRET in production
6. **Booking Endpoint**: /api/appointments/book is PUBLIC (no authentication)
7. **Service Repository**: Must have findByNameIgnoreCase() method
8. **Frontend Environment**: Update environment.prod.ts with actual backend URL before deployment

## STYLING NOTES

**Color Scheme**: Charcoal (#2C3E50), Misty Blue (#BDCDE6), Soft Gold (#F4D03F)
**Font**: Playfair Display for elegant headings
**Effects**: Glass morphism, gradient overlays, smooth transitions
**Responsive**: Mobile-first design with Tailwind CSS breakpoints

## DEPLOYMENT CHECKLIST

### Frontend (Netlify):

1. netlify.toml created
2. environment.prod.ts configured
3. All services use environment.apiUrl
4. Build command: npm run build
5. Update environment.prod.ts with production backend URL

### Backend (Render/Railway):

1. Create application-prod.yml with PostgreSQL config
2. Update CORS allowed-origins with production frontend URL
3. Set JWT_SECRET environment variable
4. Migrate data.sql from H2 to PostgreSQL syntax
5. Create Procfile: 'web: java -jar target/salon-1.0.0.jar'

## FINAL FILE COUNT

- Backend Java Files: ~35 files
- Frontend TypeScript Files: ~25 components
- Configuration Files: ~10 files
- Total Lines of Code: ~8,000+ lines

## TESTING CHECKLIST

After recreation, test these flows:

1. Home page loads with featured services
2. Click "Hair Services" redirects to hair category (not nails!)
3. Click "Nail Services" redirects to nails category (not hair!)
4. Booking form submits without login
5. Service categories expand/collapse correctly
6. Gallery images load with categories
7. Team page shows stylists
8. Contact form works
9. Navigation sticky header works
10. Footer displays correctly

## COPY THIS ENTIRE PROMPT TO CLAUDE SONNET

Just paste this entire document and say:

**"Create the Elitex Beauty Salon project exactly as specified above. Follow all steps in order, implement all critical fixes, and ensure the category navigation bug is fixed with the isProgrammaticScroll flag."**

## TROUBLESHOOTING

### Backend won't start:

Check Java version: `java -version` (must be 17+)
Rebuild: `mvn clean package -DskipTests`
Check port 8080 is not in use

### Frontend won't start:

Check Node version: `node -v` (must be 18+)
Delete node modules and reinstall: `rm -rf node_modules && npm install`
Check port 4200 is not in use

### Category navigation redirects all to hair:

Verify isProgrammaticScroll flag exists in ServiceCategoriesComponent
Verify scrollToCategory sets flag to true before scrolling
Verify onWindowScroll checks flag before calling updateActiveCategory

### Booking fails:

Verify SecurityConfig permits /api/appointments/book
Verify ServiceRepository has findByNameIgnoreCase method
Verify Appointment entity has nullable user field
Check backend logs for actual error

***

**END OF REPLICATION PROMPT**

Save this document and use it to recreate the entire project from scratch in any new workspace!

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/68950150/17d5ea41-52eb-48f2-ad02-1435fb6652f7/demo-prompt.pdf)