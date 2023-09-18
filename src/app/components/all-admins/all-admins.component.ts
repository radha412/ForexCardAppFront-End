import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/dto/admin';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.css']
})
export class AllAdminsComponent implements OnInit {


  admin :Admin[] = [];
  constructor(private adminService:AdminServiceService,
    private router :Router){}

    ngOnInit(): void {
      this.adminService.getAllAdmins().subscribe({
        next:(data)=>{
          console.log(data);
            this.admin=data;
          },
          error:(error)=>{
            console.log(error);
          }
      
      })
    }

    updateAdmin(arg0: number|undefined) {
      throw new Error('Method not implemented.');
      }

}
