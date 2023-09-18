import { Component,HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderServiceService } from '../services/order-service.service';
import { Router } from '@angular/router';

declare var Razorpay: any;

@Component({
  selector: 'app-payment-component',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  title = 'payment-gateway';

  form: any = {}; 
  constructor(private http: HttpClient,
    private orderService:OrderServiceService,private router :Router) {
  }

  ngOnInit() {

  }
  sayHello() {
    alert("Hello DK");
  }

  paymentId?: string;
  error?: string;

  options = {
    "key": "",
    "amount": "", 
    "name": "Payment",
    "description": "Forex Card",
    // "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
    "order_id":"",
    "handler": function (response: any){
      var event = new CustomEvent("payment.success", 
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );	  
      window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };

    onSubmit(): void {
      this.paymentId = ''; 
      this.error = ''; 
      this.orderService.createOrder(this.form).subscribe(
        (      data: { secretId: string; razorpayOrderId: string; applicationFee: string; pgName: string; }) => {
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; //paise
        this.options.prefill.name = "Coding World";
        this.options.prefill.email = "codingworld@gmail.com";
        this.options.prefill.contact = "9307517679";
        
        if(data.pgName ==='razor2') {
          // this.options.image="";
          var rzp1 = new Razorpay(this.options);
          rzp1.open();
        } else {
          var rzp2 = new Razorpay(this.options);
          rzp2.open();
        }

        rzp1.on('payment.failed',  (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) =>{    
          // Todo - store this information in the server
          console.log(response);
          console.log(response.error.code);    
          console.log(response.error.description);    
          console.log(response.error.source);    
          console.log(response.error.step);    
          console.log(response.error.reason);    
          console.log(response.error.metadata.order_id);    
          console.log(response.error.metadata.payment_id);
          this.error = response.error.reason;
        }
        );
      }
      ,
        (      err: { error: { message: string | undefined; }; }) => {
        this.error = err.error.message;
      }
      );
    }
    @HostListener('window:payment.success', ['$event']) 
    onPaymentSuccess(event: { detail: any; }): void {
       this.router.navigate(['/userdashboard'])
       console.log(event.detail);
    }
  }

