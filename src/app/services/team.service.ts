import { Injectable, Output, EventEmitter } from '@angular/core';
import { League } from '../models/league.model';
import { Team } from '../models/team.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DdlLeague } from '../models/ddlLeague.model';
import { DdlTeam } from '../models/ddlTeam.model';
import { Player } from '../models/player.model';
import { Observable, Subject } from 'rxjs';
import { DuelStats } from '../models/duelStats.model';


@Injectable()
export class TeamService {
    leagues: DdlLeague[] = [
        new DdlLeague('1', 'Premier League'),
        new DdlLeague('2', 'Hrvatska liga'),
        new DdlLeague('3', 'Njemačka liga')
    ];
    teams: DdlTeam[] = [
        new DdlTeam('1', 'Manchester United', '1'),
        new DdlTeam('2', 'Zagreb Dinamo', '2'),
        new DdlTeam('3', 'Hajduk', '2'),
        new DdlTeam('4', 'Osijek', '2'),
        new DdlTeam('5', 'Liverpool', '1'),
        new DdlTeam('6', 'WestHam', '1'),
        new DdlTeam('7', 'Arsenal', '1'),
        new DdlTeam('8', 'Rijeka', '2')
    ];

    duelStats: DuelStats = new DuelStats();

    homePlayer: Player;
    awayPlayer: Player;
    @Output() changeHomePlayer: EventEmitter<Player> = new EventEmitter();
    @Output() changeAwayPlayer: EventEmitter<Player> = new EventEmitter();

    constructor(private http: HttpClient) { }

    public getHomePlayer(): Player {
        return this.homePlayer;
    }
    public setHomePlayer(player: Player) {
        if (player !== this.homePlayer) {
            this.homePlayer = player;
            this.changeHomePlayer.emit(player);
        }
    }
    public getAwayPlayer(): Player {
        return this.awayPlayer;
    }
    public setAwayPlayer(player: Player) {
        if (player !== this.awayPlayer) {
            this.awayPlayer = player;
            this.changeAwayPlayer.emit(player);
        }
    }

    getAllLeagues() {
        // const dataSub = new Subject<DdlLeague[]>();
        // dataSub.next(this.leagues);
        // this.http.get(
        //     ``)
        //     .subscribe((leagues: DdlLeague[]) => {
        //         dataSub.next(leagues);
        //     }, (err) => {
        //         console.log(err);
        //     });
        // return this.http.get('/api/leagues').map((res: Response) => res.json());
        // this.httpClient.get<League[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', {
        //     observe: 'body',
        //     responseType: 'json'
        // })
        //     .subscribe(
        //         (leagues: League[]) => {
        //             this.leagues = leagues;
        //         }
        //     );
        return this.leagues;
    }

    getAllTeamsByLeagueId(id: string): DdlTeam[] {
        // this.httpClient.get<Team[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', {
        //     observe: 'body',
        //     responseType: 'json'
        // })
        //     .subscribe(
        //         (teams: Team[]) => {
        //             this.teams = teams;
        //         }
        //     );
        const teamsSelected = this.teams.filter(x => x.leagueId === id);
        return teamsSelected;
    }

    getTeamById(id: string): DdlTeam {
        // this.httpClient.get('http:\\localhost:')
        return this.teams.find(x => x.id === id);
    }

    getDuelStats(homeId: string, awayId: string): DuelStats {
        this.duelStats.awayId = '2';
        this.duelStats.awayWins = 15;
        this.duelStats.awayPenaltiesScored = 3;
        this.duelStats.awayPenaltiesWon = 8;
        this.duelStats.awayRedCards = 5;
        this.duelStats.awayYellowCards = 15;
        this.duelStats.awayGoals = 29;
        this.duelStats.awayCleanSheets = 9;
        this.duelStats.homeId = '1';
        this.duelStats.homeWins = 19;
        this.duelStats.homePenaltiesScored = 2;
        this.duelStats.homePenaltiesWon = 4;
        this.duelStats.homeRedCards = 3;
        this.duelStats.homeYellowCards = 10;
        this.duelStats.homeGoals = 39;
        this.duelStats.homeCleanSheets = 3;
        this.duelStats.drawn = 20;
        this.duelStats.played = 54;
        return this.duelStats;
    }
}
