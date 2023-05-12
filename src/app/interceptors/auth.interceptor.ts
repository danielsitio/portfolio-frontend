import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method != "GET") {
      const authorizedRequest = request.clone({
        withCredentials: true
      })
      return next.handle(authorizedRequest).pipe(
        map(algo => algo),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 403) {
            this.authService.logout()
          }
          return throwError("")
        })
      )
    }
    return next.handle(request).pipe(
      map(algo => algo),
      catchError(err => throwError(""))
    )
  }
}
