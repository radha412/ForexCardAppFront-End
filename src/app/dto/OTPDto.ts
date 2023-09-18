export class OTPDto{
    customerEmail?:string|undefined;
    otp?:number;

    constructor(customerEmail:string, otp?:number){
        this.customerEmail = customerEmail;
        this.otp = otp;
    }

}