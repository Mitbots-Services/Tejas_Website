import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service, ServiceCategory, ApiResponse } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceApiService {
  private apiUrl = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getAllServices(page: number = 0, size: number = 100, sortBy: string = 'id'): Observable<Service[]> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy);

    return this.http.get<ApiResponse<any>>(`${this.apiUrl}`, { params }).pipe(
      map((response) => {
        if (response.data && response.data.content) return response.data.content;
        return response.data || [];
      })
    );
  }

  getServiceById(id: number): Observable<Service> {
    return this.http.get<ApiResponse<Service>>(`${this.apiUrl}/${id}`).pipe(map((r) => r.data));
  }

  getFeaturedServices(): Observable<Service[]> {
    return this.http.get<ApiResponse<Service[]>>(`${this.apiUrl}/featured`).pipe(map((r) => r.data));
  }

  getPopularServices(limit: number = 6): Observable<Service[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<ApiResponse<Service[]>>(`${this.apiUrl}/popular`, { params }).pipe(map((r) => r.data));
  }

  getServicesByCategory(category: ServiceCategory, page: number = 0, size: number = 100): Observable<Service[]> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());

    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/category/${category}`, { params }).pipe(
      map((response) => {
        if (response.data && response.data.content) return response.data.content;
        return response.data || [];
      })
    );
  }

  getCategories(): Observable<ServiceCategory[]> {
    return this.http
      .get<ApiResponse<{ categories: ServiceCategory[] }>>(`${this.apiUrl}/categories`)
      .pipe(map((r) => r.data.categories));
  }
}
