import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForexCardType } from 'src/app/dto/forex-card-type';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-all-forex-type',
  templateUrl: './all-forex-type.component.html',
  styleUrls: ['./all-forex-type.component.css']
})
export class AllForexTypeComponent implements OnInit{

  constructor(private adminService:AdminServiceService,
    private router :Router){};
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
 
  deleteForexType(forexCardTypeId?: number) {
   console.log(forexCardTypeId);
   this.forexCardTypeId=forexCardTypeId;
   this.adminService.deleteForexTypeById(this.forexCardTypeId!).subscribe({
    next:(data)=>{
      console.log(data);
      alert("Data deleted successfully!!!");
      this.ngOnInit();
      },
      error:(error)=>{
        alert("Data is not deleted !!!");
        console.log(error);
        this.router.navigate(['forextypes/']);
      }
  

   });

  }
    
  updateForexType(forexCardTypeId?:number){
    console.log(forexCardTypeId);
    this.router.navigate(['forextype/',forexCardTypeId]);
  }




}
