import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { DdlTeam } from '../models/ddlTeam.model';
import { TeamService } from '../services/team.service';
import { DdlLeague } from '../models/ddlLeague.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-teams',
  templateUrl: './select-teams.component.html',
  styleUrls: ['./select-teams.component.css']
})
export class SelectTeamsComponent implements OnInit {
  leagues: DdlLeague[];
  homeTeams: DdlTeam[];
  awayTeams: DdlTeam[];
  homeTeam: DdlTeam;
  homeLeague: DdlLeague;
  awayTeam: DdlTeam;
  awayLeague: DdlLeague;
  sub: Subscription;
  selectedHomeTeam = 'Select team';
  selectedAwayTeam = 'Select team';
  selectedHomeLeague = 'Select league';
  selectedAwayLeague = 'Select league';
  constructor(private ts: TeamService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.leagues = this.ts.getAllLeagues();
    this.homeTeams = this.ts.getAllTeamsByLeagueId(this.leagues[0].id);
    this.awayTeams = this.ts.getAllTeamsByLeagueId(this.leagues[0].id);
  }
  onHomeLeagueSelect(league) {
    this.homeLeague = league;
    this.homeTeams = this.ts.getAllTeamsByLeagueId(league.id);
    this.selectedHomeLeague = this.homeLeague.name;

    if (this.homeTeam && this.homeTeam.leagueId !== league.id) {
      this.selectedHomeTeam = 'Select team';
      this.homeTeam = undefined;
    }
  }
  onHomeTeamSelect(team) {
    this.homeTeam = team;
    this.selectedHomeTeam = this.homeTeam.name;
  }
  onAwayLeagueSelect(league) {
    this.awayLeague = league;
    this.awayTeams = this.ts.getAllTeamsByLeagueId(league.id);
    this.selectedAwayLeague = this.awayLeague.name;

    if (this.awayTeam && this.awayTeam.leagueId !== league.id) {
      this.selectedAwayTeam = 'Select team';
      this.awayTeam = undefined;
    }
  }
  onAwayTeamSelect(team) {
    this.awayTeam = team;
    this.selectedAwayTeam = this.awayTeam.name;
  }
  onCompareClick() {
    this.router.navigate(['../compare/' + this.homeTeam.id + '/home/' + this.awayTeam.id + '/away'], { relativeTo: this.route });
  }
}
