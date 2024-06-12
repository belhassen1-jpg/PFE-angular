import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  private baseUrl = `${environment.urlBackend}api/plannings/`; 

  constructor(private http: HttpClient) { }

  createPlanningWithEmployees(planning: any, employeIds: number[]): Observable<any> {
    const queryParams = employeIds.join(','); 
    const url = `${this.baseUrl}createWithEmployees?employeIds=${queryParams}`;
    return this.http.post<any>(url, planning);
  }

  getAllPlanningsWithDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}allDetails`);
  }

  getFeuilleTempsWithPlanId(planningId: number): Observable<any[]> {
    const url = `${this.baseUrl}feuillestemps?planningId=${planningId}`;
    return this.http.get<any[]>(url);
  }
  
  
  getFeuilleTempsForEmployee(employeId: number): Observable<any[]> {
    const url = `${this.baseUrl}feuillestemps?employeId=${employeId}`;
    return this.http.get<any[]>(url);
  }

getFeuilleTempsForUser(): Observable<any[]> {
  const userId = localStorage.getItem('userId');
  const url = `${this.baseUrl}feuillestempsForUser?userId=${userId}`;
  return this.http.get<any[]>(url);
}


createAndAssociateFeuilleTemps(planningId: number, feuilleTemps: any): Observable<any> {
  const userId = localStorage.getItem('userId'); 
  const url = `${this.baseUrl}feuilleTemps/planning/${planningId}/employe/${userId}`;
  return this.http.post<any>(url, feuilleTemps);
}

  
  getTotalHoursWorkedForEmployee(employeId: number): Observable<any> {
    const url = `${this.baseUrl}${employeId}/total-heures-travaillees`;
    return this.http.get<any>(url);
  }

  approveFeuilleTemps(feuilleTempsId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}feuillestemps/${feuilleTempsId}/approuver`, {});
  }

  getEmployeeRankingByHours(projectName: string): Observable<any[]> {
    const url = `${this.baseUrl}planning/by-project-name/${encodeURIComponent(projectName)}/employee-ranking`;
    return this.http.get<any[]>(url);
  }

  getPlanningByProjectName(projectName: string): Observable<any> {
    const url = `${this.baseUrl}byname/${encodeURIComponent(projectName)}`;
    return this.http.get<any>(url);
  }

}
