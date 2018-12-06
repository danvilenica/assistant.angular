import { Attack } from './attack.model';
import { PlayerTeamPlay } from './playerTeamPlay.model';
import { Discipline } from './discipline.model';
import { Defense } from './defense.model';

export class Stats {
    public id: string;
    public season: string;
    public attack: Attack;
    public playerTeamPlay: PlayerTeamPlay;
    public discipline: Discipline;
    public defense: Defense;

    constructor($id: string, $season: string, $attack: Attack, $playerTeamPlay: PlayerTeamPlay, $discipline: Discipline, $defense: Defense) {
        this.id = $id;
        this.season = $season;
        this.attack = $attack;
        this.playerTeamPlay = $playerTeamPlay;
        this.discipline = $discipline;
        this.defense = $defense;
    }
}
