import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ForexPayment } from "src/app/dto/forex-payment";
import { ForexPaymentServiceService } from "src/app/services/forex-payment-service.service";

@Component({
  selector: "app-forex-payment",
  templateUrl: "./forex-payment.component.html",
  styleUrls: ["./forex-payment.component.scss"],
})
export class ForexPaymentComponent {
  selfId!: number;

  pin!: number;

  forexPayment: ForexPayment = new ForexPayment();

  constructor(
    private forexPaymentService: ForexPaymentServiceService,

    private router: Router
  ) {}

  makePayment(id: number, pin: number) {
    console.log(this.selfId);

    console.log(this.pin);

    console.log(this.forexPayment);

    this.forexPaymentService
      .makePayment(this.forexPayment, this.selfId, this.pin)
      .subscribe({
        next: () => {
          this.forexPaymentService.paypal().subscribe({
            next:(data)=>{

            },
            error: (error) => {
              alert(error.error);
            },
          })
          alert("Payment successful.");
        },

        error: (error) => {
          alert(error.error);
        },
      });
  }
}
