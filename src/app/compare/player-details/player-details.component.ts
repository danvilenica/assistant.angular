import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { PersonalDetails } from '../../models/personalDetails.model';
import { LeagueRecord } from '../../models/leagueRecord.model';
import { SocialNetworkInfo } from '../../models/socialNetworkInfo.model';
import { SeasonHistoryStats } from '../../models/seasonHistoryStats.model';
import { Stats } from '../../models/stats.model';
import { Attack } from '../../models/attack.model';
import { Defense } from '../../models/defense.model';
import { PlayerTeamPlay } from '../../models/playerTeamPlay.model';
import { Discipline } from '../../models/discipline.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent {
  @Input() player: Player;
}
