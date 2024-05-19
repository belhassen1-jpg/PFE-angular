import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = `${environment.urlBackend}` ;

  constructor(private http: HttpClient) {}

  getDepList(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/departements`);
  }

  createDep(dep: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/departements`, dep);
  }

  deleteDep(depId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/departements/${depId}`, {
      responseType: 'text',
    });
  }

  getDep(depId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}api/departements/${depId}`);
  }

  assignEmployee(departmentId: number, employeeId: number): Observable<any> {
    const url = `${this.baseUrl}api/departements/${departmentId}/employe/${employeeId}/affecter`;
    return this.http.post(url, {});
  }

  getChefDepList(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/chefdepartements`);
  }

  assignChefToDepartment(employeId: number, departementId: number, chefDepartementDetails: any): Observable<any> {
    const url = `${this.baseUrl}api/chefdepartements/assign?employeId=${employeId}&departementId=${departementId}`;
    return this.http.post<any>(url, chefDepartementDetails);
  }

  deleteChefDep(ChefdepId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/chefdepartements/${ChefdepId}`, {
      responseType: 'text',
    });
  }

}
