import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../model/login-form';
import { Observable, catchError, map, of, pipe } from 'rxjs';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = environment.backendUrl

  constructor(private http: HttpClient, private router: Router) { }

  login({ username, password }: LoginForm): Observable<void> {
    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    return this.http.post<void>(`${this.serverUrl}/login`, formData)
  }
  isLoggedIn() {
    return this.http.post(`${this.serverUrl}/test`, null)
      .pipe(map(value => true))
      .pipe(catchError(err => of(this.router.createUrlTree([""]))))
  }

}
