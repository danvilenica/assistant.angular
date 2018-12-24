import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  getAll() {
    const token = this.authService.getToken();
    return this.http.get<User[]>(`${environment.apiUrl}/users`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    });
  }

  getById(id: number) {
    const token = this.authService.getToken();
    return this.http.get(`${environment.apiUrl}/users/` + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    });
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  update(user: User) {
    const token = this.authService.getToken();
    return this.http.put(`${environment.apiUrl}/users/` + user.id, user, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    });
  }

  delete(id: number) {
    const token = this.authService.getToken();
    return this.http.delete(`${environment.apiUrl}/users/` + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    });
  }
}
