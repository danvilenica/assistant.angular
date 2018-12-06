import { Team } from './team.model';

export class League {
    public id: string;
    public name: string;
    public teams: Team[];

    constructor($id: string, $name: string, $teams: Team[]) {
        this.id = $id;
        this.name = $name;
        this.teams = $teams;
    }
}
