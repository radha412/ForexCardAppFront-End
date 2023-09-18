import { Injectable } from '@angular/core';
import { PaymentTransaction } from '../dto/payment-transaction';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentTransactionServiceService {

  private transactionUrl:string;

  constructor(private httpClient: HttpClient) {

    this.transactionUrl = 'http://localhost:8091/transaction';

  }

 

   findAll(): Observable<PaymentTransaction[]> {

    return this.httpClient.get<PaymentTransaction[]>("http://localhost:8091/customer/displaytransactions/1");

  }

 

  // public save(paymenttransaction: PaymentTransaction) {

  //   return this.http.post<PaymentTransaction>(this.transactionUrl, paymenttransaction);

  // }
}
