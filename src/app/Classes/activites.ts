import { Participant } from "./participant";

export class Activites
{
    public id:number;
    public intitule:string;
    public image:string;
    public description:string;
    public nbParticipants:number;
    public complet:boolean;
    public date:Date;
    public lieu:string;
    public lesParticipants:Participant[] = [];

    constructor(id:number, intitule:string, image:string, description:string, nbParticipants:number, complet:boolean, date:Date, lieu:string)
    {
        this.id = id;
        this.intitule = intitule;
        this.image = image;
        this.description = description;
        this.nbParticipants = nbParticipants;
        this.complet = complet;
        this.date = date;
        this.lieu = lieu;
    }
}
