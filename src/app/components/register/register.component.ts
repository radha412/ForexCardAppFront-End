import { Component } from "@angular/core";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

import { PotentialCustomer } from "src/app/dto/potential-customer";

import { RegistrationServiceService } from "src/app/services/registration-service.service";

import { Router } from "@angular/router";

import { OTPDto } from "src/app/dto/OTPDto";

@Component({
  selector: "app-register",

  templateUrl: "./register.component.html",

  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  isOTPSent?: boolean = false;

  isOTPVerified?: boolean = false;

  // registrationForm:FormGroup ;

  otpVerificationForm: FormGroup;

  setPasswordForm: FormGroup;

  constructor(
    private resgistrationService: RegistrationServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = this.formBuilder.group({
      useremail: ["", [Validators.required, Validators.email]],
    });

    this.otpVerificationForm = this.formBuilder.group({
      otp: ["", Validators.minLength(6)],
    });

    this.setPasswordForm = this.formBuilder.group({
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  registrationForm = new FormGroup({
    useremail: new FormControl("", [Validators.required, Validators.email]),
  });

  get registrationFormControls() {
    return this.registrationForm.controls;
  }

  get otpVerificationFormControl() {
    return this.otpVerificationForm.controls;
  }

  get setPasswordFormControl() {
    return this.setPasswordForm.controls;
  }

  _potentialCustomer: PotentialCustomer = new PotentialCustomer("", "");

  _otpDto: OTPDto = new OTPDto("");

  sendOTP() {
    if (this.registrationForm.value.useremail != undefined)
      this._potentialCustomer.email = this.registrationForm.value.useremail;

    this.resgistrationService.sendOTP(this._potentialCustomer).subscribe({
      next: (data: string) => {
        this.isOTPSent = true;
      },

      error: (err) => {
        alert(
          "Email cannot be sent due to some server issue. Please try again after some time"
        );

        this.router.navigate(["register"]);
      },
    });
  }

  verifyOTP() {
    if (this.registrationForm.value.useremail == undefined) {
      this.registrationForm.value.useremail = " ";
    }
    console.log(this.registrationForm.value.useremail);

    this._otpDto.customerEmail = this.registrationForm.value.useremail;

    this._otpDto.otp = this.otpVerificationForm.value.otp;
    console.log(this._otpDto.otp);
    this.resgistrationService.verifyOTP(this._otpDto).subscribe({
      next: (data: string) => {
        if (data === "Email Got Verified") {
          alert("verified");

          this.isOTPSent = false;

          this.isOTPVerified = true;
        }
      },

      error: (err) => {
        alert(err.message);
      },
    });
  }

  setPassword() {
    if (this.registrationForm.value.useremail == undefined) {
      this.registrationForm.value.useremail = " ";
    }

    this._potentialCustomer.email = this.registrationForm.value.useremail;

    this._potentialCustomer.password = this.setPasswordForm.value.password;

    this.resgistrationService.setPassword(this._potentialCustomer).subscribe({
      next: (data: string) => {
        if (data === "Login Successfully") {
          this.router.navigate(["/userdashboard"]);
        }
      },

      error: (err) => {
        alert(err.message);
        this.router.navigate(["/login"]);
      },
    });
  }
}
