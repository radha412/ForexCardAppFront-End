import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentTransaction } from 'src/app/dto/payment-transaction';
import { PaymentTransactionServiceService } from 'src/app/services/payment-transaction-service.service';

@Component({
  selector: 'app-payment-transcations',
  templateUrl: './payment-transcations.component.html',
  styleUrls: ['./payment-transcations.component.scss']
})
export class PaymentTranscationsComponent implements OnInit {
  transactions: PaymentTransaction[]=[];

  searchText: string = '';
 
  
 
   constructor(private transactionService: PaymentTransactionServiceService,
 
     private router:Router) {}
 
  
 
   ngOnInit():void{
 
     this.transactionService.findAll().subscribe({
 
       next:(data) => {
 
         console.log(data);
 
       this.transactions = data;
 
     },
 
     error:(error)=>{
 
       console.log(error);
 
     }
 
  
 
   })
 
  
 
 }
 
 filterTransactions() {
 
     if (this.searchText) {
 
       this.transactions = this.transactions.filter((transaction) =>
 
         transaction.merchant?.toLowerCase().includes(this.searchText.toLowerCase())||
 
         transaction.transactionDateTime?.includes(this.searchText)||
 
         transaction.paymentStatus?.toLowerCase().includes(this.searchText.toLowerCase())
 
       );
 
     }
 
     else {
 
       this.ngOnInit();
 
     }
 
   }
}
