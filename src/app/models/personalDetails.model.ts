export class PersonalDetails {
    public id: string;
    public name: string;
    public lastName: string;
    public imagePath: string;
    public nationality: string;
    public age: number;
    public height: number;
    public weight: number;
    public dateOfBirth: Date;

    constructor(id: string, name: string, lastName: string, imagePath: string, nationality: string, age: number, height: number, weight: number, dateOfBirth: Date) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.imagePath = imagePath;
        this.nationality = nationality;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.dateOfBirth = dateOfBirth;
    }

}
