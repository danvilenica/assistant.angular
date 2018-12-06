import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Player } from '../../models/player.model';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  @Input() teams: Team[];
  constructor(private ts: TeamService) { }

  onHomeSelect(player: Player) {
    this.ts.setHomePlayer(player);
  }

  onAwaySelect(player: Player) {
    this.ts.setAwayPlayer(player);
  }
}
