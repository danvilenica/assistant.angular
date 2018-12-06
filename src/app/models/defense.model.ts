export class Defense {
    public id: string;
    public tackles: number;
    public tacklesSuccess: number;
    public blockedShots: number;
    public interceptions: number;
    public clearances: number;
    public headedClearance: number;
    public recoveries: number;
    public duelsWon: number;
    public duelsLost: number;
    public successful: number;
    public errorsLeadingToGoal: number;
    public aerialBattlesWon: number;
    public aerialBattlesLost: number;


    constructor($id: string, $tackles: number, $tacklesSuccess: number, $blockedShots: number, $interceptions: number, $clearances: number, $headedClearance: number, $recoveries: number, $duelsWon: number, $duelsLost: number, $successful: number, $errorsLeadingToGoal: number, $aerialBattlesWon: number, $aerialBattlesLost: number) {
        this.id = $id;
        this.tackles = $tackles;
        this.tacklesSuccess = $tacklesSuccess;
        this.blockedShots = $blockedShots;
        this.interceptions = $interceptions;
        this.clearances = $clearances;
        this.headedClearance = $headedClearance;
        this.recoveries = $recoveries;
        this.duelsWon = $duelsWon;
        this.duelsLost = $duelsLost;
        this.successful = $successful;
        this.errorsLeadingToGoal = $errorsLeadingToGoal;
        this.aerialBattlesWon = $aerialBattlesWon;
        this.aerialBattlesLost = $aerialBattlesLost;
    }

}
