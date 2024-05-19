import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaieService {

  private baseUrl = `${environment.urlBackend}api/paie/`;

  constructor(private http: HttpClient) { }

  calculerEtSauvegarderPaie(employeId: number): Observable<any> {
    const url = `${this.baseUrl}calculer/${employeId}`;
    return this.http.post<any>(url, null);
  }

  genererBulletinPaie(employeId: number): Observable<any> {
    const url = `${this.baseUrl}bulletin/${employeId}`;
    return this.http.post<any>(url, null);
  }

  genererDeclarationFiscale(employeId: number): Observable<any> {
    const url = `${this.baseUrl}declaration/${employeId}`;
    return this.http.post<any>(url, null);
  }

  obtenirBulletinsPaie(employeId: number): Observable<any[]> {
    const url = `${this.baseUrl}bulletins/${employeId}`;
    return this.http.get<any[]>(url);
  }

  obtenirDeclarationsFiscales(employeId: number): Observable<any[]> {
    const url = `${this.baseUrl}declarations/${employeId}`;
    return this.http.get<any[]>(url);
  }

  obtenirDernierePaie(employeId: number): Observable<any> {
    const url = `${this.baseUrl}dernierePaie/${employeId}`;
    return this.http.get<any>(url);
  }

  obtenirDernierBulletinPaie(employeId: number): Observable<any> {
    const url = `${this.baseUrl}dernierBulletinPaie/${employeId}`;
    return this.http.get<any>(url);
  }

// For user/Employee dashboard
getBullPaiesForUser(): Observable<any[]> {
  const userId = localStorage.getItem('userId');
  const url = `${this.baseUrl}bulletinsForUser/${userId}`;
  return this.http.get<any[]>(url);
}

getLastPaieForUser(): Observable<any> {
  const userId = localStorage.getItem('userId');
  const url = `${this.baseUrl}dernierePaieForUser/${userId}`;
  return this.http.get<any>(url);
}

getLastBullPaieForUser(): Observable<any> {
  const userId = localStorage.getItem('userId');
  const url = `${this.baseUrl}dernierBulletinPaieForUser/${userId}`;
  return this.http.get<any>(url);
}

}
