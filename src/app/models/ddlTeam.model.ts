
export class DdlTeam {
    public id: string;
    public name: string;
    public leagueId: string;

    constructor($id: string, $name: string, $leagueId: string) {
        this.id = $id;
        this.name = $name;
        this.leagueId = $leagueId;
    }
}
