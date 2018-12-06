import { TeamAttack } from './teamAttack.model';
import { TeamDefence } from './teamDefence.model';
import { Discipline } from './discipline.model';
import { TeamTeamPlay } from './teamTeamPlay.model';

export class TeamStats {
    private id: string;
    private season: string;
    private teamAttack: TeamAttack;
    private teamPlay: TeamTeamPlay;
    private teamDiscipline: Discipline;
    private teamDefence: TeamDefence;
}
