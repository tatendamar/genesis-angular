import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnquiriesService {
  private baseUrl = 'https://fsboafrica.com/api/enquiries';
  constructor(private http: HttpClient) {}

  getEnquiries() {
    return this.http.get(`${this.baseUrl}/all`).pipe(
      tap((response: any) => {
        return response.responseBody;
      })
    );
  }

  getEnquiriesById(id: string) {
    return this.http.get(`${this.baseUrl}/get-single/${id}`).pipe(
      tap((response: any) => {
        return response.responseBody;
      })
    );
  }

  removeEnquiriesById(id: string) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`).pipe(
      tap((response: any) => {
        return response.responseBody;
      })
    );
  }
}
