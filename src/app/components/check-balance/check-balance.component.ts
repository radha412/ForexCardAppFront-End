import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { AdminServiceService } from "src/app/services/admin-service.service";

@Component({
  selector: "app-check-balance",
  templateUrl: "./check-balance.component.html",
  styleUrls: ["./check-balance.component.scss"],
})
export class CheckBalanceComponent {
  selfId!: number;

  pin!: number;

  current_balance!: any;


  constructor(
    private adminService:AdminServiceService,
    private router: Router
  ) {}

  showCurrentBalance(id: number, pin: number) {
    console.log(this.selfId);

    console.log(this.pin);

    console.log(this.current_balance);

    this.adminService
      .showCurrentBalance(this.selfId, this.pin)
      .subscribe({
        next: (data) => {
          this.current_balance = data;

          alert("Done");
          
        },

        error: (error) => {
          alert(error.error);
        },
      });
  }
}
