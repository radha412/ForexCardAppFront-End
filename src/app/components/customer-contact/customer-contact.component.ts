import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Complaint } from "src/app/dto/complaint";
import { AdminServiceService } from "src/app/services/admin-service.service";

@Component({
  selector: "app-customer-contact",
  templateUrl: "./customer-contact.component.html",
  styleUrls: ["./customer-contact.component.css"],
})
export class CustomerContactComponent {

  complaints: Complaint = new Complaint;
  
  constructor(
    private adminService: AdminServiceService,

    private router: Router
  ) {}

  makeComplaint() {
    console.log(this.complaints);

    this.adminService.makeComplaint(this.complaints).subscribe({
      next: () => {
        alert("Complaint Registered");
      },

      error: (error) => {
        alert("Failed to register complaint");
      },
    });
  }
}
