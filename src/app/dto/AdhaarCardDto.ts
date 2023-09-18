export class AdhaarCardDto{
    name?:string;
    adhaarNumber?:string;

    constructor(name?:string, adhaarNumber?:string){
        this.name = name;
        this.adhaarNumber = adhaarNumber;
    }
}