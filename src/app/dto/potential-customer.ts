export class PotentialCustomer {
    potentialCustomerId?:number;
    email?: string ;
    password?: string;
    phoneNumber?:string;
    status?:boolean;
    constructor(email:string, password:string){
        this.email = email;
        this.password = password;
    }
}
