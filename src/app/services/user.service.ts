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
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    const token = this.authService.getToken();
    return this.http.get(`${environment.apiUrl}/users/` + id);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  update(user: User) {
    const token = this.authService.getToken();
    return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
  }

  delete(id: number) {
    const token = this.authService.getToken();
    return this.http.delete(`${environment.apiUrl}/users/` + id);
  }
}
