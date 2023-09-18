import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdhaarCardDto } from '../dto/AdhaarCardDto';
import { CustomerDto } from '../dto/CustomerDto';

@Injectable({
  providedIn: 'root'
})
export class ForexCardService {
  
  constructor(private http:HttpClient) { }

 

  base_passport_url= "http://localhost:9090/passport-verification";

  base_adhaar_url = "http://localhost:9090/adhaar-card/verification"

  base_pancard_url = "http://localhost:9090/adhaar-card/linked-pancard"

  base_adhaar_owner_url="http://localhost:9090/adhaar-card/owner-name";

  get_linked_pancard = "http://localhost:9090/adhaar-card/linked-pancard/{adhaarCard}/{pancard}";

  

  verifyAdhaar(adhaarNumber: string, ownerName: string) :Observable<String>{

 

    console.log('in server verification');

    console.log(ownerName);

    return this.http.get(`${this.base_adhaar_url}/${adhaarNumber}/${ownerName}`,{responseType: 'text'});

 

  }

 

  verifyPanCard(panCard: string, adhaarCard : string):Observable<String>{

    return this.http.get(`${this.base_pancard_url}/${adhaarCard}/${panCard}`,{responseType: 'text'});

  }

 

  verifyPassport(passport: string):Observable<String> {

    return this.http.get(`${this.base_passport_url}/${passport}`, {responseType : 'text'});

  }

 

  verifyName(adhaar: AdhaarCardDto):Observable<String>{

    return this.http.post(`${this.base_adhaar_owner_url}`,adhaar,{... Option, responseType: 'text'});

  }

 

  submitDetails(customer: CustomerDto):Observable<String> {

    console.log("submitting detils");

    return this.http.post("http://localhost:8091/customers/submit-customer-details", customer, {responseType: 'text'});

  }
}