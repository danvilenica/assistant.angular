import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  token: string;
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        username: username,
        password: password
      })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.token = user.token;
          }

          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.token = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.token != null;
  }

  getToken() {
    return this.token;
  }
}
