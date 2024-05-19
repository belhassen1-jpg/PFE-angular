import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private baseUrl = `${environment.urlBackend}` ;

  constructor(private http: HttpClient) {}

  getDepensesForCurrentUser(): Observable<any> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}api/finances/depenses/${userId}`;
    return this.http.get<any>(url);
  }
  
  getObjEpargneForCurrentUser(): Observable<any> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}api/finances/objectifs-epargne/${userId}`;
    return this.http.get<any>(url);
  }

  addDepense(depense: any): Observable<any> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}api/finances/depenses?userId=${userId}`;
    return this.http.post<any>(url, depense);
  }

  addObjectifEpargne(objectif: any): Observable<any> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}api/finances/objectifs-epargne?userId=${userId}`;
    return this.http.post<any>(url, objectif);
  }

  getAnalyseFinanciereForCurrentUser(): Observable<any> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}api/finances/analyses/${userId}`;
    return this.http.get<any>(url);
  }
}
