import { Component, OnInit, Input } from '@angular/core';
import { Stats } from '../../../models/stats.model';
import { Attack } from '../../../models/attack.model';
import { PlayerTeamPlay } from '../../../models/playerTeamPlay.model';
import { Discipline } from '../../../models/discipline.model';
import { Defense } from '../../../models/defense.model';
import { statEnum } from './statEnum.enum';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() stats: Stats[];
  stat: Stats;
  selected: statEnum;
  constructor() { }

  ngOnInit() {
    if (this.stats != null && this.stats.length !== 0) {
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

      this.stats.forEach(stat => {
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
      const allTimeAttack = new Attack('1', goals, goalsPerMatch, headedGoals, goalsWithRightFoot, goalsWithLeftFoot, penaltiesScored, freekicksScored, shots, shotsOnTarget, accuracy, hitWoodwork, bigChancesMissed);
      const allTimePlayerTeamPlay = new PlayerTeamPlay('1', assists, passes, passesPerMatch, bigChancesCreated, crosses, accuracyT, throughBalls, accurateLongBalls);
      const allTimeDiscipleine = new Discipline('1', yellowCards, redCards, fauls, offsides);
      const allTimeDefense = new Defense('1', tackles, tacklesSuccess, blockedShots, interceptions, clearances, headedClearance, recoveries, duelsWon, duelsLost, successful, errorsLeadingToGoal, aerialBattlesWon, aerialBattlesLost);
      const allTime = new Stats('1', 'allTime', allTimeAttack, allTimePlayerTeamPlay, allTimeDiscipleine, allTimeDefense);
      this.stats.unshift(allTime);
      this.stat = this.stats[0];
      this.selected = statEnum.attack;
    }
  }

  onSeasonSelect(stat) {
    this.stat = stat;
  }

  onAttackSelect() {
    this.selected = statEnum.attack;
  }

  onDefenseSelect() {
    this.selected = statEnum.defense;
  }

  onTeamPlaySelect() {
    this.selected = statEnum.teamPlay;
  }

  onDisciplineSelect() {
    this.selected = statEnum.discipline;
  }
}
