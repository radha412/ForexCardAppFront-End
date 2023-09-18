import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.scss']
})
export class BuyComponentComponent implements OnInit {
  inputField1='';
  selectField1!: string;
  selectField2!: string;
  selectField3!: string;
  selectField4!: string;
  selectedCountry!: string;
  countries!: any[]; // Array to store the list of countries and currencies

  constructor(private http: HttpClient,private router:Router) {
    // Fetch the JSON data from the assets folder
    this.http.get<any[]>('/assets/countries.json').subscribe(data => {
      this.countries = data;
    });
  }
  ngOnInit(): void {
  }
  activeTab: string = 'load'; // Initialize the active tab to 'buy'
  selectedCurrency: string = 'USD';
  amount: number = 0;
  exchangeRate!: any; // Example exchange rate
  onSelectChange() {
    if (this.selectField1 && this.selectField2 && this.selectField3 && this.selectField4) {
      // All four fields have values, you can now make your API call here
     let  apiUrl = 'http://localhost:8091/currencyrate';
     const url = `${apiUrl}/${this.selectField1}/${this.selectField3}/${this.selectField2}/${this.selectField4}`;
      this.http.post(url,{}).subscribe(res=>{
        this.exchangeRate=res;
      })
    }
  }
  buy(): void {
    // Implement the buy logic here
  }
  load(){
    let  apiUrl = 'http://localhost:8091/card/money';
    const url=`${apiUrl}/${this.inputField1}/${this.selectField1}/${this.selectField3}/${this.selectField2}/${this.selectField4}/${this.amount*this.exchangeRate}`;
    this.http.post(url,{}).subscribe(res=>{
      if(res){
        this.router.navigate(['/payment']);
      }
    })
  }
  unload(){
    let  apiUrl = 'http://localhost:8091/card/money';
    const url=`${apiUrl}/${this.inputField1}/${this.amount*this.exchangeRate}/${this.selectField1}/${this.selectField3}/${this.selectField2}/${this.selectField4}`;
    this.http.patch(url,{}).subscribe(res=>{
      if(res){
        this.router.navigate(['/payment']);
      }
    })
  }
}
