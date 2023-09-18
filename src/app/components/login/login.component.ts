import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Admin } from 'src/app/dto/admin';

import { PotentialCustomer } from 'src/app/dto/potential-customer';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  errorMessage:string = '';
  successMessage:string = '';
  getErrorMessage() {
    throw new Error('Method not implemented.');
  }

  // loginForm = new FormGroup({
  //   useremail: new FormControl(),
  //   userPassword: new FormControl(),
  // })

  loginForm: FormGroup;
  loginFormAdmin!: FormGroup ;

  constructor(private loginService: LoginServiceService, 
    private adminService:AdminServiceService,
    public router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      useremail : ['', [Validators.required, Validators.email]],
      userPassword:['', [Validators.required, Validators.minLength(3)]],
   });
   this.loginFormAdmin = this.formBuilder.group({
    adminemail : ['', [Validators.required, Validators.email]],
    adminPassword:['', [Validators.required, Validators.minLength(3)]],
 });
}

get loginFormAdminControl() {
  return this.loginFormAdmin.controls;
}
  get loginFormControl() {
    return this.loginForm.controls;
  }
  ngOnInit(): void { }

  potentialCustomerCredentials: PotentialCustomer = new PotentialCustomer("", "");
  admin:Admin=new Admin();

  onSubmitAdmin(){
    this.admin.adminEmail = (this.loginFormAdmin.value.adminemail) ;
    console.log(this.admin.adminEmail);
    this.admin.password = (this.loginFormAdmin.value.adminPassword);
    console.log(this.admin.password);
    this.adminService.login(this.admin.adminEmail,this.admin.password).
       subscribe({
        next: (data ) => {
          console.log("login");
          this.router.navigate(['/adminhome']);
        },
        error: (error) => {
          this.errorMessage = error.error;
          this.successMessage = '';
          this.router.navigate(['login']);
        }
      });
  }
  
  onSubmit() {
    this.potentialCustomerCredentials.email = (this.loginForm.value.useremail);
    this.potentialCustomerCredentials.password = (this.loginForm.value.userPassword);

    this.loginService.login(this.potentialCustomerCredentials).
      subscribe({
        next: (data) => {
          this.loginService.loginDetail.next(true);
          this.router.navigate(['/userdashboard']);
        },
        error: (error) => {
          this.errorMessage = error.error;
          this.successMessage = '';
          this.router.navigate(['login']);
        }
      })
  }
}

/* Possible errors
email is not registered
password is wrong
wrong email
*/