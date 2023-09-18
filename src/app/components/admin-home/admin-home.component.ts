import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PotentialCustomer } from 'src/app/dto/potential-customer';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  constructor(private adminService:AdminServiceService,
    private loginService:LoginServiceService,
    private router :Router){}

  potentialCustomer:PotentialCustomer[]=[];
  canShow:boolean = false;



  ngOnInit(): void {
    this.loginService.loginDetail.subscribe((result: boolean) =>{
      this.canShow = result;
    })
    this.adminService.getAllCustomers().subscribe({
      next:(data)=>{
        console.log(data);
          this.potentialCustomer=data;
        },
        error:(error)=>{
          console.log(error.error);
        }
    
    })
  }

}
