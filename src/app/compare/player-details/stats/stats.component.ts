import { Component, OnInit, Input } from '@angular/core';
import { Stats } from '../../../models/stats.model';
import { statEnum } from './statEnum.enum';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  private _stats: Stats[];
  public get stats(): Stats[] {
    return this._stats;
  }

  @Input('stats')
  public set stats(s: Stats[]) {
    this._stats = s;
    this.stat = this._stats[0];
  }
  public stat: Stats;
  public selected: statEnum;
  constructor() {}

  ngOnInit() {
    this.selected = statEnum.attack;
  }

  onSeasonSelect(stat: Stats) {
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
