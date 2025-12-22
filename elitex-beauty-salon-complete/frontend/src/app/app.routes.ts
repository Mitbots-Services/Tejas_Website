import { Routes } from '@angular/router';
// Import components directly to avoid 'loadComponent' promise issues
import { HomeComponent } from './features/home/home.component';
import { ServiceCategoriesComponent } from './features/service-categories/service-categories.component';
import { BookingComponent } from './features/booking/booking.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { TeamComponent } from './features/team/team.component';
import { ContactComponent } from './features/contact/contact.component';
import { BlogComponent } from './features/blog/blog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServiceCategoriesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  
  // Lazy load modules (admin/auth/dashboard) if they have their own routing files
  { 
    path: 'auth', 
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES) 
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./features/user-dashboard/user-dashboard.routes').then(m => m.USER_DASHBOARD_ROUTES) 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES) 
  },
  
  { path: '**', redirectTo: '' }
];