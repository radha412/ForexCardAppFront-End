import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Admin } from "../dto/admin";
import { ForexCardType } from "../dto/forex-card-type";
import { Complaint } from "../dto/complaint";
import { PotentialCustomer } from "../dto/potential-customer";

@Injectable({
  providedIn: "root",
})
export class AdminServiceService {
  currentbalance_url = "http://localhost:8091/customer/current-balance";

  base_url = "http://localhost:8091/admin";
  base_url_forex = "http://localhost:8091/forexcarddetail";

  constructor(private httpClient: HttpClient) {}

  getAllCustomers(): Observable<PotentialCustomer[]> {
    return this.httpClient.get<PotentialCustomer[]>(
      "http://localhost/8091/potencialcustomers/"
    );
  }

  addAdmin(admin: Admin, id: number) {
    return this.httpClient.post(`${this.base_url}/${id}`, admin);
  }

  login(useremail: any, userPassword: any): Observable<Admin> {
    return this.httpClient.get(`${this.base_url}/${useremail}/${userPassword}`);
  }

  addAdminNew(admin: Admin) {
    return this.httpClient.post(`${this.base_url}`, admin);
  }

  addForexType(forexCardType: ForexCardType): Observable<ForexCardType> {
    return this.httpClient.post(`${this.base_url_forex}`, forexCardType);
  }

  getAllForexType(): Observable<ForexCardType[]> {
    return this.httpClient.get<ForexCardType[]>(
      "http://localhost:8091/forexcarddetails"
    );
  }

  getForexCardTypeById(id: number): Observable<ForexCardType> {
    return this.httpClient.get<ForexCardType>(`${this.base_url_forex}/${id}`);
  }

  // setForexType(id: number | undefined) {
  //   return this.httpClient.put("");
  // }

  getAllAdmins(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(`${this.base_url}`);
  }

  getAllComplaints(): Observable<Complaint[]> {
    return this.httpClient.get<Complaint[]>(
      "http://localhost:8091/allComplaints"
    );
  }

  updateForexCard(forexcarddetail: ForexCardType): Observable<ForexCardType> {
    return this.httpClient.post<ForexCardType>(
      "http://localhost:8091/forexcarddetail",
      forexcarddetail
    );
  }

  deleteForexTypeById(id: number): Observable<ForexCardType> {
    return this.httpClient.delete<ForexCardType>(
      `${this.base_url_forex}/${id}`
    );
  }

  showCurrentBalance(id: number, password: any): Observable<number> {
    return this.httpClient.get<number>(
      `${this.currentbalance_url}/${id}/${password}`
    );
  }

  complaint_url = "http://localhost:8091/customer/complaint";

  makeComplaint(customerContact: Complaint) {
    return this.httpClient.post(`${this.complaint_url}`, customerContact);
  }
}
