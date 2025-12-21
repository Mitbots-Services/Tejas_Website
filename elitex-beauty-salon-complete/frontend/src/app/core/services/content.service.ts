import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stylist, GalleryImage, GalleryCategory, Testimonial, Promotion, ApiResponse } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllStylists(): Observable<Stylist[]> {
    return this.http.get<ApiResponse<Stylist[]>>(`${this.baseUrl}/stylists`).pipe(map((r) => r.data));
  }

  getStylistById(id: number): Observable<Stylist> {
    return this.http.get<ApiResponse<Stylist>>(`${this.baseUrl}/stylists/${id}`).pipe(map((r) => r.data));
  }

  getFeaturedStylists(): Observable<Stylist[]> {
    return this.http.get<ApiResponse<Stylist[]>>(`${this.baseUrl}/stylists/featured`).pipe(map((r) => r.data));
  }

  getGalleryImages(category?: GalleryCategory): Observable<GalleryImage[]> {
    let params = new HttpParams();
    if (category) params = params.set('category', category);
    return this.http.get<ApiResponse<GalleryImage[]>>(`${this.baseUrl}/gallery`, { params }).pipe(map((r) => r.data));
  }

  getFeaturedGalleryImages(): Observable<GalleryImage[]> {
    return this.http.get<ApiResponse<GalleryImage[]>>(`${this.baseUrl}/gallery/featured`).pipe(map((r) => r.data));
  }

  getAllTestimonials(): Observable<Testimonial[]> {
    return this.http.get<ApiResponse<Testimonial[]>>(`${this.baseUrl}/testimonials`).pipe(map((r) => r.data));
  }

  getFeaturedTestimonials(): Observable<Testimonial[]> {
    return this.http.get<ApiResponse<Testimonial[]>>(`${this.baseUrl}/testimonials/featured`).pipe(map((r) => r.data));
  }

  getActivePromotions(): Observable<Promotion[]> {
    return this.http.get<ApiResponse<Promotion[]>>(`${this.baseUrl}/promotions/active`).pipe(map((r) => r.data));
  }

  validatePromoCode(code: string): Observable<Promotion> {
    const params = new HttpParams().set('code', code);
    return this.http.post<ApiResponse<Promotion>>(`${this.baseUrl}/promotions/validate`, {}, { params }).pipe(map((r) => r.data));
  }
}
