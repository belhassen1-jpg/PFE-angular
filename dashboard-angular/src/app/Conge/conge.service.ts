import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private baseUrl = `${environment.urlBackend}api/demandes-conge/`;

  constructor(private http: HttpClient) {}

  getAllDemandesConge(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getDemandeConge(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }


  creerDemandeConge(demande: any): Observable<any> {
    const userId = localStorage.getItem('userId');
    return this.http.post(`${this.baseUrl}${userId}`, demande);
  }

  approuverDemandeConge(demandeId: number, empId: number, statut: string): Observable<any> {
    const params = new HttpParams().set('statut', statut);
    return this.http.put(`${this.baseUrl}${demandeId}/approuver/${empId}`, {}, { params });
  }

  deleteDemandeConge(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`);
  }

  calculerTotalJoursCongesPourEmploye(employeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${employeId}/total-jours-conges`);
  }
}
