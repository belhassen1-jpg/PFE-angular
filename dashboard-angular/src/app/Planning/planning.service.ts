import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // Import environment configuration

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  private baseUrl = `${environment.urlBackend}api/plannings/`; // Use baseUrl from environment configuration

  constructor(private http: HttpClient) { }

  createPlanningWithEmployees(planning: any, employeIds: number[]): Observable<any> {
    const queryParams = employeIds.join(','); // Convert employeIds array to a comma-separated string
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
  
  // Method to get the feuille de temps list of an employee
  getFeuilleTempsForEmployee(employeId: number): Observable<any[]> {
    const url = `${this.baseUrl}feuillestemps?employeId=${employeId}`;
    return this.http.get<any[]>(url);
  }
// Method to get the feuille de temps list of an employee
getFeuilleTempsForUser(): Observable<any[]> {
  const userId = localStorage.getItem('userId');
  const url = `${this.baseUrl}feuillestempsForUser?userId=${userId}`;
  return this.http.get<any[]>(url);
}

// Method to create and associate FeuilleTemps
createAndAssociateFeuilleTemps(planningId: number, feuilleTemps: any): Observable<any> {
  const userId = localStorage.getItem('userId'); // Get the userId from localStorage
  const url = `${this.baseUrl}feuilleTemps/planning/${planningId}/employe/${userId}`;
  return this.http.post<any>(url, feuilleTemps);
}

  // Method to get total hours worked for a specific employee
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
