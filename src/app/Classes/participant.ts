export class Participant
{
    public cin:number;
    public nom:string;
    public prenom:string;
    public age:number;
    public genre:string;
    public photo:string;

    constructor(cin:number, nom:string, prenom:string, age:number, genre:string, photo:string)
    {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.genre = genre;
        this.photo = photo;   
    } 
}