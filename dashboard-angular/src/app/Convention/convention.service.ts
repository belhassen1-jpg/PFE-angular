import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConventionService {

  private baseUrl = `${environment.urlBackend}api/conventions/`;

  constructor(private http: HttpClient) {}


  getAllConventions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}etParticipants`);
  }

  getAllConventionsDemandes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}demandeConvention`);
  }

  participateInConvention(userId: number, conventionId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}demandeParticipation?userId=${userId}&conventionId=${conventionId}`, {});
  }

  validateDemandeConvention(convDemandeId: number): Observable<any> {
    const url = `${this.baseUrl}validerDemande/${convDemandeId}`;
    return this.http.put(url, null); 
  }

  createConvention(conventionData: any, partenaireId: number): Observable<any> {
    const url = `${this.baseUrl}add?partenaireId=${partenaireId}`;
    return this.http.post<any>(url, conventionData);
  }

  deleteEmployeeFromConvention(convId: number, empId: number): Observable<any> {
    const url = `${this.baseUrl}convention/${convId}/employee/${empId}`;
    return this.http.delete(url);
  }

  deleteConventionsForEmployee(empId: number): Observable<any> {
    const url = `${this.baseUrl}employee/${empId}`;
    return this.http.delete<any>(url);
  }

 
}
