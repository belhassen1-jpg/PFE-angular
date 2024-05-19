import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobofferService {

  private baseUrl = `${environment.urlBackend}`+'api/joboffers/' ;

  constructor(private http: HttpClient) { }

  getAllJobOffers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}all`);
  }

  getJobOfferById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }

  addJobOffer(jobOffer: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}add`, jobOffer);
  }

  updateJobOffer(id: number, jobOffer: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}update/${id}`, jobOffer);
  }

  deleteJobOffer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}delete/${id}`);
  }
}
