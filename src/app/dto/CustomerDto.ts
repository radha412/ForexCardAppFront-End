export class CustomerDto{

    phoneNumber? : string;

    name?:string;

    email? : string;

    adhaarNumber?:string;

    pancard?:string;

    passport?:string;

    

 

    constructor(name:string, email:string,phoneNumber:string,

        adhaarNumber:string, pancard:string, passport:string) {

        this.phoneNumber = phoneNumber;

        this.name = name;

        this.email = email;

        this.adhaarNumber = adhaarNumber;

        this.pancard = pancard;

        this.passport = passport;

    }

}