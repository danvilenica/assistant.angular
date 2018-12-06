export class Attack {
    public id: string;
    public goals: number;
    public goalsPerMatch: number;
    public headedGoals: number;
    public goalsWithRightFoot: number;
    public goalsWithLeftFoot: number;
    public penaltiesScored: number;
    public freekicksScored: number;
    public shots: number;
    public shotsOnTarget: number;
    public accuracy: number;
    public hitWoodwork: number;
    public bigChancesMissed: number;


    constructor($id: string, $goals: number, $goalsPerMatch: number, $headedGoals: number, $goalsWithRightFoot: number, $goalsWithLeftFoot: number, $penaltiesScored: number, $freekicksScored: number, $shots: number, $shotsOnTarget: number, $accuracy: number, $hitWoodwork: number, $bigChancesMissed: number) {
        this.id = $id;
        this.goals = $goals;
        this.goalsPerMatch = $goalsPerMatch;
        this.headedGoals = $headedGoals;
        this.goalsWithRightFoot = $goalsWithRightFoot;
        this.goalsWithLeftFoot = $goalsWithLeftFoot;
        this.penaltiesScored = $penaltiesScored;
        this.freekicksScored = $freekicksScored;
        this.shots = $shots;
        this.shotsOnTarget = $shotsOnTarget;
        this.accuracy = $accuracy;
        this.hitWoodwork = $hitWoodwork;
        this.bigChancesMissed = $bigChancesMissed;
    }

}
