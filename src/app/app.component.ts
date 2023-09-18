import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAdhaarVerified: any;

  isPancardVerified: any;
  
    title: any;
  
  verifyOTP() {
  
    this.isOtpSent = false;
  
  this.isOtpVerified = true;
  
  }
  
  sendOTP() {
  
  this.isOtpSent = true;
  
  }
  
    firstFormGroup = this._formBuilder.group({
  
      firstCtrl: ['', Validators.required],
  
    });
  
    secondFormGroup = this._formBuilder.group({
  
      secondCtrl: ['', Validators.required],
  
    });
  
  isOtpSent: any;
  
  isOtpVerified: any;
  
   
  
   
  
    constructor(private _formBuilder: FormBuilder) {}
}
