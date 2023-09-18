import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/dto/complaint';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.css']
})
export class AllComplaintsComponent implements OnInit{

  constructor(private adminService:AdminServiceService,
    private router :Router){}
  complaints : Complaint[]=[];
  ngOnInit(): void {
    this.adminService.getAllComplaints().subscribe({
      next:(data)=>{
        console.log(data);
          this.complaints=data;
        },
        error:(error)=>{
          console.log(error);
        }
    
    })
  }

}
