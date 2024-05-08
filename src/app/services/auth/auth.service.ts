import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from 'src/app/models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment["urlBase"];

  constructor(private http: HttpClient) { }

  login(model: LoginModel): Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Headers' : '*',
    });

    // Fazendo a solicitação com o cabeçalho customizado
    return this.http.post<any>(`${this.apiUrl}Auth/token`, model, { headers });
  }

  setToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  cleanToken(){
    localStorage.removeItem('token')
  }

  
  isAuthenticated(){
    const token = localStorage.getItem('token');
    return !!token; 
  }
}