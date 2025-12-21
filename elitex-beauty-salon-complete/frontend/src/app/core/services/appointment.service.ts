import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Appointment, BookingRequest, ApiResponse } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private apiUrl = `${environment.apiUrl}/appointments`;

  constructor(private http: HttpClient) {}

  bookAppointment(request: BookingRequest): Observable<Appointment> {
    return this.http.post<ApiResponse<Appointment>>(`${this.apiUrl}/book`, request).pipe(map((r) => r.data));
  }

  getMyAppointments(): Observable<Appointment[]> {
    return this.http.get<ApiResponse<Appointment[]>>(`${this.apiUrl}/my-appointments`).pipe(map((r) => r.data));
  }

  cancelAppointment(id: number): Observable<void> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`).pipe(map((r) => r.data));
  }
}
