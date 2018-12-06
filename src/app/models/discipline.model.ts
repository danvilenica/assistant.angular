export class Discipline {
    public id: string;
    public yellowCards: number;
    public redCards: number;
    public fauls: number;
    public offsides: number;

    constructor($id: string, $yellowCards: number, $redCards: number, $fauls: number, $offsides: number) {
        this.id = $id;
        this.yellowCards = $yellowCards;
        this.redCards = $redCards;
        this.fauls = $fauls;
        this.offsides = $offsides;
    }
}
