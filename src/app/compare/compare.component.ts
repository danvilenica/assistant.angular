import { Component, OnInit, Input, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team.model';
import { Player } from '../models/player.model';
import { Attack } from '../models/attack.model';
import { Defense } from '../models/defense.model';
import { PlayerTeamPlay } from '../models/playerTeamPlay.model';
import { Discipline } from '../models/discipline.model';
import { Stats } from '../models/stats.model';
import { PersonalDetails } from '../models/personalDetails.model';
import { SocialNetworkInfo } from '../models/socialNetworkInfo.model';
import { LeagueRecord } from '../models/leagueRecord.model';
import { Subscription } from 'rxjs';
import { DuelStats } from '../models/duelStats.model';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  homeId: string;
  awayId: string;
  @Input() teams: Team[];
  homeTeam: Team;
  awayTeam: Team;
  @Input() homePlayer: Player;
  @Input() awayPlayer: Player;
  sub1: Subscription;
  sub2: Subscription;

  constructor(public route: ActivatedRoute,
    public router: Router,
    public teamService: TeamService
    ) { }

  attack: Attack = new Attack('lkmdsf', 55, 22, 234, 34, 23, 234, 235, 32, 23, 23, 23, 5);
  defense: Defense = new Defense('lksd', 34, 34, 53, 2, 3, 5, 2, 6, 45, 65, 23, 12, 2);
  playerTeamPlay: PlayerTeamPlay = new PlayerTeamPlay('lksd', 5, 2, 6, 45, 65, 23, 12, 2);
  discipline: Discipline = new Discipline('lksd', 65, 23, 12, 2);
  stat: Stats = new Stats('lkjds', '2000', this.attack, this.playerTeamPlay, this.discipline, this.defense);
  stats: Stats[] = [this.stat, this.stat];
  duelStats: DuelStats;
  player: Player = new Player(
    '1',
    new PersonalDetails('sfsd', 'Danijel', 'Vilenica', 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p66749.png', 'Croat', 33, 202, 100, new Date(1984, 2, 30)),
    new SocialNetworkInfo('pčlmsdv', 'https://www.facebook.com/Romelulukaku/', 'https://twitter.com/romelulukaku9', 'https://www.instagram.com/romelulukakubolingoli10/'),
    new LeagueRecord('ldsknc', 120, 100, 66),
    this.stats
  );

  player2: Player = new Player(
    '2',
    new PersonalDetails('sfsd', 'Danijel2', 'Vilenica2', 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p66749.png', 'Croat', 33, 202, 100, new Date(1984, 2, 30)),
    new SocialNetworkInfo('pčlmsdv', 'https://www.facebook.com/Romelulukaku/', 'https://twitter.com/romelulukaku9', 'https://www.instagram.com/romelulukakubolingoli10/'),
    new LeagueRecord('ldsknc', 150, 200, 116),
    this.stats
  );

  ngOnInit() {
    this.homeTeam = new Team();
    this.homeTeam.id = '1';
    this.homeTeam.name = 'Dinamo';
    this.homeTeam.players = [this.player, this.player2, this.player,
    this.player2, this.player, this.player2, this.player, this.player2,
    this.player, this.player2, this.player2, this.player, this.player2,
    this.player2, this.player, this.player2, this.player2, this.player];
    this.homeTeam.imagePath = '../../../assets/images/arsenal.svg';

    this.awayTeam = new Team();
    this.awayTeam.id = '2';
    this.awayTeam.name = 'Hajduk';
    this.awayTeam.players = [this.player, this.player2, this.player,
    this.player2, this.player, this.player2, this.player, this.player2,
    this.player, this.player2, this.player2, this.player, this.player2,
    this.player2, this.player];
    this.awayTeam.imagePath = '../../../assets/images/arsenal.svg';

    this.teams = [this.homeTeam, this.awayTeam];
    this.route.paramMap
      .subscribe(
        (route: any) => {
          this.homeId = route.params.homeId;
          this.awayId = route.params.awayId;
        }
      );
    this.homePlayer = this.homeTeam.players[0];
    this.awayPlayer = this.awayTeam.players[0];

    this.teamService.changeHomePlayer.subscribe(
      (player: Player) => {
        this.homePlayer = player;
      });

    this.teamService.changeAwayPlayer.subscribe(
      (player: Player) => {
        this.awayPlayer = player;
      });

    this.duelStats = this.teamService.getDuelStats('1', '2');
    // this.ts.getTeamById(this.homeId).subscribe(
    //   (team: Team) => {
    //     this.homeTeam = team;
    //     this.homeTeam.players.push(this.player);
    //     this.homeTeam.players.push(this.player2);
    //   });

    // this.ts.getTeamById(this.awayId).subscribe(
    //   (team: Team) => {
    //     this.awayTeam = team;
    //     this.homeTeam.players.push(this.player);
    //     this.homeTeam.players.push(this.player2);
    //   });
    
  }
}
