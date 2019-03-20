import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        switch (err.status) {
          case 401:
            // auto logout if 401 response returned from api
            this.authenticationService.logout();
            location.reload(true);
            break;
          case 404:
            this.router.navigate(['error']);
            break;
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
