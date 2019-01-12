import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DdlLeague } from '../models/ddlLeague.model';
import { DdlTeam } from '../models/ddlTeam.model';

@Injectable()
export class LeagueService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<DdlLeague[]>(`${environment.apiUrl}/leagues`);
  }

  getTeamsByLeagueId(id: string) {
    return this.http.get<DdlTeam[]>(`${environment.apiUrl}/leagues` + id + '/teams');
  }
}
