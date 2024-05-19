import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private baseUrl = `${environment.urlBackend}`+'api/partenaires' ;


  constructor(private http: HttpClient) { }

  // GET request to fetch all partners
  getPartenaires(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // POST request to add a new partner
  addPartner(partner: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, partner);
  }

  // DELETE request to delete a partner by ID
  deletePartner(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
