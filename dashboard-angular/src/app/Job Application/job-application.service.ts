import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private baseUrl = `${environment.urlBackend}applications/`;

  constructor(private http: HttpClient) {}

  submitApplication(formData: FormData) {
    return this.http.post<any>(`${this.baseUrl}submit`, formData);
  }

  getAllJobApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}all`);
  }

  updateStatus(applicationId: number, status: string): Observable<any> {
    const url = `${this.baseUrl}updateStatus/${applicationId}?status=${status}`;
    return this.http.patch(url, {});
  }


  downloadResume(jobApplicationId: number): Observable<Blob> {
    const url = `${this.baseUrl}download/resume/${jobApplicationId}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  downloadCoverLetter(jobApplicationId: number): Observable<Blob> {
    const url = `${this.baseUrl}download/cover-letter/${jobApplicationId}`;
    return this.http.get(url, { responseType: 'blob' });
  }


  getApplicationsForJobOffer(jobOfferId: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}job-offer/${jobOfferId}`);
  }

}
