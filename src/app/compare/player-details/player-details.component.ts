import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';


@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  @Input('player') player: Player;

  ngOnInit() {
    console.log('PlayerDetails component: Player: ', this.player);
  }
}
