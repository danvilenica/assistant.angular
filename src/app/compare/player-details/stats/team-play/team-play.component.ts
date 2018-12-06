import { Component, OnInit, Input } from '@angular/core';
import { PlayerTeamPlay } from '../../../../models/playerTeamPlay.model';

@Component({
  selector: 'app-team-play',
  templateUrl: './team-play.component.html',
  styleUrls: ['./team-play.component.css']
})
export class TeamPlayComponent implements OnInit {
  @Input() playerTeamPlay: PlayerTeamPlay;
  constructor() { }

  ngOnInit() {
  }

}
