import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team.model';
import { Player } from '../models/player.model';
import { DuelStats } from '../models/duelStats.model';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  public loading = true;
  public homeId: string;
  public awayId: string;
  public duelStats: DuelStats;
  public homeTeam: Team;
  public awayTeam: Team;
  public teams: Team[] = [];
  public homePlayer: Player;
  public awayPlayer: Player;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public teamService: TeamService,
    public alertService: AlertService
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((route: any) => {
      this.homeId = route.params.homeId;
      this.awayId = route.params.awayId;
      this.getData();
    });

    this.teamService.changeHomePlayer.subscribe((player: Player) => {
      this.homePlayer = player;
    });

    this.teamService.changeAwayPlayer.subscribe((player: Player) => {
      this.awayPlayer = player;
    });
  }

  getData() {
    this.loading = true;
    this.teamService.getTeamStatsByIds(+this.homeId, +this.awayId).subscribe(
      (data: { homeTeam: Team; awayTeam: Team; duelStats: DuelStats }) => {
        this.teams.push(data.homeTeam);
        this.teams.push(data.awayTeam);
        this.homeTeam = data.homeTeam;
        this.awayTeam = data.awayTeam;
        this.duelStats = data.duelStats;
        this.homePlayer = this.homeTeam.players[0];
        this.homePlayer.stats = this.teamService.setAllTime(this.homePlayer.stats);
        this.awayPlayer = this.awayTeam.players[0];
        this.awayPlayer.stats = this.teamService.setAllTime(this.awayPlayer.stats);
        this.loading = false;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}
