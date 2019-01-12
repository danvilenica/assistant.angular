import { Component, OnInit } from '@angular/core';
import { DdlTeam } from '../models/ddlTeam.model';
import { TeamService } from '../services/team.service';
import { DdlLeague } from '../models/ddlLeague.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';

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
  selectedHomeTeam = 'Select team';
  selectedAwayTeam = 'Select team';
  selectedHomeLeague = 'Select league';
  selectedAwayLeague = 'Select league';

  constructor(
    private alertService: AlertService,
    private ts: TeamService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ts.getAllLeagues().subscribe(
      data => {
        this.leagues = data;
        this.homeTeams = this.leagues[0].teams;
        this.awayTeams = this.leagues[0].teams;
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  onHomeLeagueSelect(league) {
    this.homeLeague = league;
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
    this.router.navigate(
      [
        '../compare/' + this.homeTeam.id + '/home/' + this.awayTeam.id + '/away'
      ],
      { relativeTo: this.route }
    );
  }
}
