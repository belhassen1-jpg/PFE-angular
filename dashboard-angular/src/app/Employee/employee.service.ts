import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = `${environment.urlBackend}` ;

  constructor(private http: HttpClient) {}

  getEmpList(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/employes`);
  }

  createEmp(emp: any, departmentId: number, userId: number): Observable<any> {
    const url = `${this.baseUrl}api/employes?departementId=${departmentId}&userId=${userId}`;
    return this.http.post(url, emp);
  }  

  deleteEmp(empId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/employes/${empId}`, {
      responseType: 'text',
    });
  }

  getEmp(empId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}api/employes/${empId}`);
  }

  updateEmp(id: number, emp: any): Observable<any> {
    return this.http.put(`${this.baseUrl}api/employes/${id}`, emp);
  }
  getEmployeeReport(empId: number): Observable<Blob> {
    const url = `${this.baseUrl}api/rapports/${empId}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  getEmployeeReportForUser(): Observable<Blob> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}api/rapports/user/${userId}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
