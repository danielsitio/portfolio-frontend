import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../model/login-form';
import { Observable, Subject, catchError, map, of, pipe, tap } from 'rxjs';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = environment.backendUrl



  isLoggedIn: Subject<boolean> = new Subject()

  constructor(private http: HttpClient, private router: Router) { }

  login({ username, password }: LoginForm): Observable<void> {
    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    return this.http.post<void>(`${this.serverUrl}/login`, formData).pipe(tap(this.succesfulLoginHandler))
  }
  logout() {
    return this.http.post(`${this.serverUrl}/logout`, null).pipe(tap(this.succesfulLogoutHandler))
  }

  succesfulLoginHandler = () => {
    this.emitLogin()
    this.router.navigate(["/edit"])
  }
  succesfulLogoutHandler = () => {
    this.emitLogout()
    if (this.router.url == "/edit")
      this.router.navigate([""])
  }

  emitLogout = () => this.isLoggedIn.next(false)
  emitLogin = () => this.isLoggedIn.next(true)

  testIsLoggedIn() {
    return this.http.post(`${this.serverUrl}/test`, null)
      .pipe(map(value => {
        this.emitLogin()
        return true
      }))
      .pipe(catchError(err => of(this.router.createUrlTree([""]))))
  }

}
