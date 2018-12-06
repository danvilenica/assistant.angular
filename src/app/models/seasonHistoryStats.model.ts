import { LeagueStatus } from './leagueStatus.model';

export class SeasonHistoryStats {
    public id: string;
    public season: string;
    public leagueStatus: LeagueStatus;
    public manager: string;
    public topGoalscorer: string;
    public mostAppearances: number;
    public biggestWin: number;
    public heaviestDefeat: number;

    constructor($id: string, $season: string, $leagueStatus: LeagueStatus, $manager: string, $topGoalscorer: string, $mostAppearances: number, $biggestWin: number, $heaviestDefeat: number) {
        this.id = $id;
        this.season = $season;
        this.leagueStatus = $leagueStatus;
        this.manager = $manager;
        this.topGoalscorer = $topGoalscorer;
        this.mostAppearances = $mostAppearances;
        this.biggestWin = $biggestWin;
        this.heaviestDefeat = $heaviestDefeat;
    }

}
