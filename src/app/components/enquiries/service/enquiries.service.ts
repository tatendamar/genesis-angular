import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Enquiry, ApiResponse } from '../enquiries.component';

@Injectable({
  providedIn: 'root',
})
export class EnquiriesService {
  private baseUrl = 'https://fsboafrica.com/api/enquiries';
  constructor(private http: HttpClient) {}

  getEnquiries(): Observable<ApiResponse[]> {
    return this.http.get(`${this.baseUrl}/all`).pipe(
      tap((response: any) => {
        return response;
      })
    );
  }

  getEnquiriesById(id: string): Observable<Enquiry | any> {
    return this.http.get(`${this.baseUrl}/get-single/${id}`).pipe(
      tap((response: any) => {
        return response;
      })
    );
  }

  removeEnquiriesById(id: string): Observable<Enquiry | any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`).pipe(
      tap((response: any) => {
        return response;
      })
    );
  }
}
