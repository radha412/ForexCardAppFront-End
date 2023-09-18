import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
  canShow:boolean = false;
  constructor(private loginService:LoginServiceService)
  {}
  ngOnInit()
  {
    this.loginService.loginDetail.subscribe(result =>{
      this.canShow = result;
    })
  }
}
