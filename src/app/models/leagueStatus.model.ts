export class LeagueStatus {
    public id: string;
    public season: string;
    public position: number;
    public club: string;
    public imagePath: string;
    public played: string;
    public win: number;
    public loss: number;
    public draw: number;
    public goalDifference: number;

    constructor($id: string, $season: string, $position: number, $club: string, $imagePath: string, $played: string, $win: number, $loss: number, $draw: number, $goalDifference: number, $points: number) {
        this.id = $id;
        this.season = $season;
        this.position = $position;
        this.club = $club;
        this.imagePath = $imagePath;
        this.played = $played;
        this.win = $win;
        this.loss = $loss;
        this.draw = $draw;
        this.goalDifference = $goalDifference;
        this.points = $points;
    }
    public points: number;
}
