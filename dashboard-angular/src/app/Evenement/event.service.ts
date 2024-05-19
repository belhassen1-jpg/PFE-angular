import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = `${environment.urlBackend}api/evenements/`;

  constructor(private http: HttpClient) {}


  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}etParticipants`);
  }

  getAllEventsDemandes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}demandeEvent`);
  }

  participateInEvent(userId: number, eventId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}demandeParticipation?userId=${userId}&evenementId=${eventId}`, {});
  }

  validateDemandeEvent(eventDemandeId: number): Observable<any> {
    const url = `${this.baseUrl}validerDemande/${eventDemandeId}`;
    return this.http.put(url, null); // Assuming you don't need to send any data in the body
  }

  createEvenement(evenementData: any, partenaireId: number): Observable<any> {
    const url = `${this.baseUrl}CreerEvenement?partenaireId=${partenaireId}`;
    return this.http.post<any>(url, evenementData);
  }

  deleteEmployeeFromEvent(eventId: number, empId: number): Observable<any> {
    const url = `${this.baseUrl}evenement/${eventId}/employee/${empId}`;
    return this.http.delete(url);
  }

  deleteEventsForEmployee(empId: number): Observable<any> {
    const url = `${this.baseUrl}employee/${empId}`;
    return this.http.delete<any>(url);
  }

  getNumberOfEventsForEmployee(employeId: number): Observable<number> {
    const url = `${this.baseUrl}nombreEvenementsParticipes/${employeId}`;
    return this.http.get<number>(url);
  }

  getNumberOfEventsForUser(): Observable<number> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}nombreEvenementsParticipesForUser/${userId}`;
    return this.http.get<number>(url);
  }
 
}
