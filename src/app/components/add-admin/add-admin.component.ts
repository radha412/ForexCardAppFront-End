import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/dto/admin';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {

  selfId!:number;
  admin :Admin = new Admin();
  constructor(private adminService:AdminServiceService,
    private router :Router){}

  AddAdmin(id: number){
    console.log(this.selfId);
    console.log(this.admin);
      this.adminService.addAdmin(this.admin,this.selfId).subscribe({
        next:()=>{
          alert("Admin added successfully .");
          this.seeadmin();
        },
        error:(error)=>{
          alert("Sorry Unable to add admin .")
        }
      })
  }
  addAdminNew1(){
    console.log(this.admin);
      this.adminService.addAdminNew(this.admin).subscribe({
        next:()=>{
          alert("Admin added successfully .");
          this.seeadmin();
        },
        error:(error)=>{
          alert("Sorry Unable to add admin .")
        }
      })
  }

  seeadmin(){
    this.router.navigate(['admins']);
  }

}
