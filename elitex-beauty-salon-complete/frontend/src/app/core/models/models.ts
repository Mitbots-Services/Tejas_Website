export interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  roles?: string[];
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  roles: string[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  category: ServiceCategory;
  duration: number;
  price: number;
  image?: string;
  featured?: boolean;
  popular?: boolean;
}

export type ServiceCategory =
  | 'HAIR_CARE'
  | 'NAIL_CARE'
  | 'SKIN_CARE'
  | 'BRIDAL'
  | 'WAXING'
  | 'THREADING'
  | 'MEHANDI'
  | 'MAKEUP';

export interface Stylist {
  id: number;
  name: string;
  specialization: string;
  bio: string;
  image?: string;
  experience: number;
  rating: number;
  totalReviews: number;
  featured?: boolean;
}

export interface Appointment {
  id: number;
  customerId: number;
  customerName?: string;
  stylistId?: number;
  stylistName?: string;
  serviceId?: number;
  serviceName?: string;
  appointmentDate: string;
  appointmentTime: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt?: string;
}

export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';

export interface BookingRequest {
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  serviceName: string;
  appointmentDate: string;
  appointmentTime: string;
  notes?: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  category: GalleryCategory;
  featured?: boolean;
  uploadDate?: string;
}

export type GalleryCategory = 'HAIR' | 'MAKEUP' | 'BRIDAL' | 'NAILS' | 'SKIN';

export interface Testimonial {
  id: number;
  customerName: string;
  rating: number;
  review: string;
  date: string;
  image?: string;
  featured?: boolean;
  approved?: boolean;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
  code?: string;
  validFrom: string;
  validUntil: string;
  active?: boolean;
  image?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
