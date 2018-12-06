import { Component, OnInit, Input } from '@angular/core';
import { DuelStats } from 'src/app/models/duelStats.model';

@Component({
  selector: 'app-duel-stats',
  templateUrl: './duel-stats.component.html',
  styleUrls: ['./duel-stats.component.css']
})
export class DuelStatsComponent implements OnInit {
  @Input() duelStats: DuelStats;
  @Input() homeName: string;
  @Input() homeImagePath: string;
  @Input() awayName: string;
  @Input() awayImagePath: string;
  constructor() { }

  ngOnInit() {
  }

}
