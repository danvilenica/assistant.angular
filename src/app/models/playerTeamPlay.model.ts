export class PlayerTeamPlay {
    public id: string;
    public assists: number;
    public passes: number;
    public passesPerMatch: number;
    public bigChancesCreated: number;
    public crosses: number;
    public accuracy: number;
    public throughBalls: number;
    public accurateLongBalls: number;

    constructor($id: string, $assists: number, $passes: number, $passesPerMatch: number, $bigChancesCreated: number, $crosses: number, $accuracy: number, $throughBalls: number, $accurateLongBalls: number) {
        this.id = $id;
        this.assists = $assists;
        this.passes = $passes;
        this.passesPerMatch = $passesPerMatch;
        this.bigChancesCreated = $bigChancesCreated;
        this.crosses = $crosses;
        this.accuracy = $accuracy;
        this.throughBalls = $throughBalls;
        this.accurateLongBalls = $accurateLongBalls;
    }
}
