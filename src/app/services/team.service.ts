import { Injectable, Output, EventEmitter } from '@angular/core';
import { Team } from '../models/team.model';
import { HttpClient } from '@angular/common/http';
import { DdlLeague } from '../models/ddlLeague.model';
import { Player } from '../models/player.model';
import { environment } from 'src/environments/environment';
import { DuelStats } from '../models/duelStats.model';
import { Stats } from '../models/stats.model';
import { Attack } from '../models/attack.model';
import { PlayerTeamPlay } from '../models/playerTeamPlay.model';
import { Discipline } from '../models/discipline.model';
import { Defense } from '../models/defense.model';

@Injectable()
export class TeamService {
  homePlayer: Player;
  awayPlayer: Player;
  @Output() changeHomePlayer: EventEmitter<Player> = new EventEmitter();
  @Output() changeAwayPlayer: EventEmitter<Player> = new EventEmitter();

  constructor(private http: HttpClient) {}

  public getHomePlayer(): Player {
    return this.homePlayer;
  }

  public setHomePlayer(player: Player) {
    if (player !== this.homePlayer) {
      this.homePlayer = player;
      this.homePlayer.stats = this.setAllTime(this.homePlayer.stats);
      this.changeHomePlayer.emit(player);
    }
  }

  public getAwayPlayer(): Player {
    return this.awayPlayer;
  }

  public setAwayPlayer(player: Player) {
    if (player !== this.awayPlayer) {
      this.awayPlayer = player;
      this.awayPlayer.stats = this.setAllTime(this.awayPlayer.stats);
      this.changeAwayPlayer.emit(player);
    }
  }

  getTeamStatsByIds(homeId: number, awayId: number) {
    const ids = {
      homeId: homeId,
      awayId: awayId
    };

    return this.http.post(`${environment.apiUrl}/teams`, ids);
  }

  getAllLeagues() {
    return this.http.get<DdlLeague[]>(`${environment.apiUrl}/leagues`);
  }

  setAllTime(stats: Stats[]): Stats[] {
    let goals = 0;
    let goalsPerMatch = 0;
    let headedGoals = 0;
    let goalsWithRightFoot = 0;
    let goalsWithLeftFoot = 0;
    let penaltiesScored = 0;
    let freekicksScored = 0;
    let shots = 0;
    let shotsOnTarget = 0;
    let accuracy = 0;
    let hitWoodwork = 0;
    let bigChancesMissed = 0;

    let assists = 0;
    let passes = 0;
    let passesPerMatch = 0;
    let bigChancesCreated = 0;
    let crosses = 0;
    let accuracyT = 0;
    let throughBalls = 0;
    let accurateLongBalls = 0;

    let yellowCards = 0;
    let redCards = 0;
    let fauls = 0;
    let offsides = 0;

    let tackles = 0;
    let tacklesSuccess = 0;
    let blockedShots = 0;
    let interceptions = 0;
    let clearances = 0;
    let headedClearance = 0;
    let recoveries = 0;
    let duelsWon = 0;
    let duelsLost = 0;
    let successful = 0;
    let errorsLeadingToGoal = 0;
    let aerialBattlesWon = 0;
    let aerialBattlesLost = 0;

    stats.forEach(stat => {
      goals += stat.attack.goals;
      goalsPerMatch += stat.attack.goalsPerMatch;
      headedGoals += stat.attack.headedGoals;
      goalsWithRightFoot += stat.attack.goalsWithRightFoot;
      goalsWithLeftFoot += stat.attack.goalsWithLeftFoot;
      penaltiesScored += stat.attack.penaltiesScored;
      freekicksScored += stat.attack.freekicksScored;
      shots += stat.attack.shots;
      shotsOnTarget += stat.attack.shotsOnTarget;
      accuracy += stat.attack.accuracy;
      hitWoodwork += stat.attack.hitWoodwork;
      bigChancesMissed += stat.attack.bigChancesMissed;

      assists += stat.playerTeamPlay.assists;
      passes += stat.playerTeamPlay.passes;
      passesPerMatch += stat.playerTeamPlay.passesPerMatch;
      bigChancesCreated += stat.playerTeamPlay.bigChancesCreated;
      crosses += stat.playerTeamPlay.crosses;
      accuracyT += stat.playerTeamPlay.accuracy;
      throughBalls += stat.playerTeamPlay.throughBalls;
      accurateLongBalls += stat.playerTeamPlay.accurateLongBalls;

      yellowCards += stat.discipline.yellowCards;
      redCards += stat.discipline.redCards;
      fauls += stat.discipline.fauls;
      offsides += stat.discipline.offsides;

      tackles += stat.defense.tackles;
      tacklesSuccess += stat.defense.tacklesSuccess;
      blockedShots += stat.defense.blockedShots;
      interceptions += stat.defense.interceptions;
      clearances += stat.defense.clearances;
      headedClearance += stat.defense.headedClearance;
      recoveries += stat.defense.recoveries;
      duelsWon += stat.defense.duelsWon;
      duelsLost += stat.defense.duelsLost;
      successful += stat.defense.successful;
      errorsLeadingToGoal += stat.defense.errorsLeadingToGoal;
      aerialBattlesWon += stat.defense.aerialBattlesWon;
      aerialBattlesLost += stat.defense.aerialBattlesLost;
    });
    const allTimeAttack = new Attack(
      '1',
      goals,
      goalsPerMatch,
      headedGoals,
      goalsWithRightFoot,
      goalsWithLeftFoot,
      penaltiesScored,
      freekicksScored,
      shots,
      shotsOnTarget,
      accuracy,
      hitWoodwork,
      bigChancesMissed
    );
    const allTimePlayerTeamPlay = new PlayerTeamPlay(
      '1',
      assists,
      passes,
      passesPerMatch,
      bigChancesCreated,
      crosses,
      accuracyT,
      throughBalls,
      accurateLongBalls
    );
    const allTimeDiscipleine = new Discipline(
      '1',
      yellowCards,
      redCards,
      fauls,
      offsides
    );
    const allTimeDefense = new Defense(
      '1',
      tackles,
      tacklesSuccess,
      blockedShots,
      interceptions,
      clearances,
      headedClearance,
      recoveries,
      duelsWon,
      duelsLost,
      successful,
      errorsLeadingToGoal,
      aerialBattlesWon,
      aerialBattlesLost
    );
    const allTime = new Stats(
      '1',
      'allTime',
      allTimeAttack,
      allTimePlayerTeamPlay,
      allTimeDiscipleine,
      allTimeDefense
    );
    stats.unshift(allTime);
    return stats;
  }
}
