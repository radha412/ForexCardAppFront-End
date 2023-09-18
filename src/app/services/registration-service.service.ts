import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { PotentialCustomer } from "../dto/potential-customer";

import { Observable } from "rxjs";

import { OTPDto } from "../dto/OTPDto";

@Injectable({
  providedIn: "root",
})
export class RegistrationServiceService {
  constructor(private http: HttpClient) {}

  sendOTP(_potentialCustomer: PotentialCustomer): Observable<string> {
    console.log("activating database");

    console.log(_potentialCustomer.email);

    return this.http.post(
      "http://localhost:8091/potential-customer/generate-otp",
      _potentialCustomer,
      { responseType: "text" }
    );
    
  }

  verifyOTP(_otpDto: OTPDto): Observable<string> {
    return this.http.post(
      "http://localhost:8091/potential-customer/email-verification",
      _otpDto,
      { responseType: "text" }
    );
  }

  setPassword(_potentialCustomer: PotentialCustomer): Observable<string> {
    return this.http.post(
      "http://localhost:8091/potential-customer/set-password",
      _potentialCustomer,
      { responseType: "text" }
    );
  }
}
