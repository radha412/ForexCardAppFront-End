import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { PotentialCustomer } from '../dto/potential-customer';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public loginDetail=new BehaviorSubject<any>(false);
  constructor(private http: HttpClient) { }

  login(_potentialCustomer: PotentialCustomer) : Observable<PotentialCustomer>{
    return this.http.post("http://localhost:8091/potential-customer/login-credentials/", _potentialCustomer)
  }

  

}
