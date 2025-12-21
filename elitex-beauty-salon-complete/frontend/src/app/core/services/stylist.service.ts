import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Stylist, ApiResponse } from '../models/models';

@Injectable({ providedIn: 'root' })
export class StylistService {
    private apiUrl = `${environment.apiUrl}/stylists`;

    constructor(private http: HttpClient) {}

    getAllStylists(): Observable<Stylist[]> {
        return this.http.get<ApiResponse<Stylist[]>>(`${this.apiUrl}`)
            .pipe(map(response => response.data));
    }

    getStylistById(id: number): Observable<Stylist> {
        return this.http.get<ApiResponse<Stylist>>(`${this.apiUrl}/${id}`)
            .pipe(map(response => response.data));
    }
}
