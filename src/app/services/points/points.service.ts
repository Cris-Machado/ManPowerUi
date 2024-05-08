import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = environment["urlBase"];
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return headers;
  }

  getListPoints(){
    var headers = this.getHeaders()
    return this.http.get<any>(`${this.apiUrl}UsersPoint`,  { headers });
  }

  createPoint(model: any){
    var headers = this.getHeaders()
    return this.http.post<any>(`${this.apiUrl}UsersPoint`,  model, { headers });
  }
}
