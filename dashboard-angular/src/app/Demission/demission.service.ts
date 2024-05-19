import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemissionService {
  private baseUrl = `${environment.urlBackend}api/demissions`;

  constructor(private http: HttpClient) {}

  getAllDemandeDemissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  creerDemandeDémission(demande: any): Observable<any> {
    const userId = localStorage.getItem('userId');
    return this.http.post(`${this.baseUrl}/creer/${userId}`, demande);
  }

  traiterDemandeDémission(demandeId: number, accepter: boolean): Observable<any> {
    return this.http.post(`${this.baseUrl}/traiter/${demandeId}?accepter=${accepter}`, {});
  }
 
}
