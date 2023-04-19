import { Injectable } from '@angular/core';
import { Credentials } from '../model/credentials';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated: boolean = false

  constructor(private http: HttpClient) { }

  login = (credentials: Credentials) => this.http.post(`${environment.apiUrl}/login`, credentials)
  logout = () => this.http.post(`${environment.apiUrl}/logout`, {})

}
