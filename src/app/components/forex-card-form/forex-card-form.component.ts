import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AdhaarCardDto } from "src/app/dto/AdhaarCardDto";
import { CustomerDto } from "src/app/dto/CustomerDto";
import { ForexCardType } from "src/app/dto/forex-card-type";
import { AdminServiceService } from "src/app/services/admin-service.service";
import { ForexCardService } from "src/app/services/forex-card.service";
@Component({
  selector: "app-forex-card-form",
  templateUrl: "./forex-card-form.component.html",
  styleUrls: ["./forex-card-form.component.scss"],
})
export class ForexCardFormComponent {

  verifyEmail() {}

  isDisabled: boolean = false;

  isAdhaarVerified: boolean = false;

  isPancardVerified: boolean = false;

  isPassportVerified: boolean = false;

  sendOTPForm = this._formBuilder.group({
    phoneNumber: ["", Validators.required],
  });

  verifyOTPForm = this._formBuilder.group({
    otp: ["", Validators.required],
  });

  verifyAdhaarForm = this._formBuilder.group({
    adhaarCard: ["", Validators.required],
  });

  verifyPanCardForm = this._formBuilder.group({
    panCard: ["", Validators.required],
  });

  verifyPassportForm = this._formBuilder.group({
    passport: ["", Validators.required],
  });

  userNameForm = this._formBuilder.group({
    name: ["", Validators.required],

    email: ["", [Validators.required, Validators.email]],
  });

  submitForm = this._formBuilder.group({
    forexCardType :["", [Validators.required]]
  })

  constructor(
    private adminService:AdminServiceService,
    private _formBuilder: FormBuilder,
    private forexCardService: ForexCardService,
    private router :Router
  ) {}

  forexCardName?:string;
  forexCardTypeId ?: number;
  forexCardTypes : ForexCardType[]=[];
  forexCardType:ForexCardType= new ForexCardType();
  ngOnInit(): void {
    this.adminService.getAllForexType().subscribe({
      next:(data)=>{
        console.log(data);
          this.forexCardTypes=data;
        },
        error:(error)=>{
          console.log(error);
        }
    
    });
  }
 

  verifyPanCard() {
    if (
      this.verifyPanCardForm.value.panCard === null ||
      this.verifyPanCardForm.value.panCard == undefined
    ) {
      this.verifyPanCardForm.value.panCard = " ";
    }

    if (
      this.verifyAdhaarForm.value.adhaarCard === null ||
      this.verifyAdhaarForm.value.adhaarCard == undefined
    ) {
      this.verifyAdhaarForm.value.adhaarCard = " ";
    }

    this.forexCardService
      .verifyPanCard(
        this.verifyPanCardForm.value.panCard,
        this.verifyAdhaarForm.value.adhaarCard
      )
      .subscribe({
        next: (data) => {
          this.isPancardVerified = true;
        },

        error: (err) => {
          alert(err.error);
        },
      });
  }

  verifyAdhaar() {
    if (
      this.verifyAdhaarForm.value.adhaarCard === null ||
      this.verifyAdhaarForm.value.adhaarCard == undefined
    ) {
      this.verifyAdhaarForm.value.adhaarCard = " ";
    }

    if (
      this.userNameForm.value.name === null ||
      this.userNameForm.value.name === undefined
    ) {
      this.userNameForm.value.name = " ";
    }

    console.log(this.userNameForm.value.name);

    this.forexCardService
      .verifyAdhaar(
        this.verifyAdhaarForm.value.adhaarCard,
        this.userNameForm.value.name
      )
      .subscribe({
        next: (data) => {
          this.isAdhaarVerified = true;
        },

        error: (err) => {
          alert(err.error);
        },
      });
  }

  verifyPassport() {
    if (
      this.verifyPassportForm.value.passport === null ||
      this.verifyPassportForm.value.passport == undefined
    ) {
      this.verifyPassportForm.value.passport = " ";
    }

    this.forexCardService
      .verifyPassport(this.verifyPassportForm.value.passport)
      .subscribe({
        next: (data) => {
          alert("Documents Verified");
        },

        error: (err) => {
          alert("Documents are not verified");
        },
      });

    this.isDisabled =
      this.isAdhaarVerified && this.isPancardVerified && this.isPancardVerified;
  }

  verifyName() {
    if (
      this.userNameForm.value.name === null ||
      this.userNameForm.value.name === undefined
    ) {
      this.userNameForm.value.name = " ";
    }

    if (
      this.verifyAdhaarForm.value.adhaarCard === null ||
      this.verifyAdhaarForm.value.adhaarCard == undefined
    ) {
      this.verifyAdhaarForm.value.adhaarCard = " ";
    }

    const adhaar: AdhaarCardDto = new AdhaarCardDto(
      this.userNameForm.value.name,
      this.verifyAdhaarForm.value.adhaarCard
    );

    this.forexCardService.verifyName(adhaar).subscribe({
      next: (data) => {
        alert(data);
      },

      error: (err) => {
        alert(err.error);
      },
    });
  }

  submitDetails() {
    console.log(this.userNameForm.value.email);
    const customer: CustomerDto = new CustomerDto(
      this.userNameForm.value.name,

      this.userNameForm.value.email,

      this.verifyAdhaarForm.value.phoneNumber,

      this.verifyAdhaarForm.value.adhaarCard,

      this.verifyPanCardForm.value.pancard,

      this.verifyPassportForm.value.passport
    );

    this.forexCardService.submitDetails(customer).subscribe({
      next: (data) => {
        alert("form submitted successfully");
        this.router.navigate(['userdashboard']);
      },

      error: (err) => {
        alert(err.error);
      },
    });
  }
}
