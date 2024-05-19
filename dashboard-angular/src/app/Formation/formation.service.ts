import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private baseUrl = `${environment.urlBackend}api/sessionformations`;

  constructor(private http: HttpClient) {}

  creerSessionFormation(sessionFormationData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, sessionFormationData);
  }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getAllFormations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  obtenirSessionFormationParId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getAllSessionsWithParticipants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/with-participants`);
  }

  inscrireEmployeASession(sessionId: number, userId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${sessionId}/inscrire/${userId}`, {});
  }

  obtenirNombreFormationsParticipees(employeId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/nombreFormations/${employeId}`);
  }

  obtenirNombreFormationsParticipesForUser(): Observable<number> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}/nombreFormationdParticipesForUser/${userId}`;
    return this.http.get<number>(url);
  }
}
