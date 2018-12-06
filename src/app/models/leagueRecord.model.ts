export class LeagueRecord {
    public id: string;
    public appearances: number;
    public goals: number;
    public assists: number;

    constructor($id: string, $appearances: number, $goals: number, $assists: number) {
        this.id = $id;
        this.appearances = $appearances;
        this.goals = $goals;
        this.assists = $assists;
    }

}
