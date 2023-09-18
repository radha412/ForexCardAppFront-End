import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ForexPayment } from "../dto/forex-payment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ForexPaymentServiceService {
  
  payment_url = "http://localhost:8091/customer/withdrawal";

  constructor(private httpClient: HttpClient) {}

  paypal() {
    return this.httpClient.get("http://localhost:9090/");
  }
  makePayment(forexPayment: ForexPayment, id: number, password: any) {
    return this.httpClient.post(
      `${this.payment_url}/${id}/${password}`,
      forexPayment
    );
  }
}
