import { Player } from './player.model';
import { TeamStats } from './teamStats.model';
import { SeasonHistoryStats } from './seasonHistoryStats.model';

export class Team {
    public id: string;
    public name: string;
    public description: string;
    public nameOfStadium: string;
    public imagePath: string;
    public players: Player[];
    public teamStats: TeamStats[];
}
