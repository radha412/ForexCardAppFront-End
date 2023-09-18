import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForexCardType } from 'src/app/dto/forex-card-type';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-forex-card-s',
  templateUrl: './forex-card-s.component.html',
  styleUrls: ['./forex-card-s.component.scss']
})
export class ForexCardSComponent implements OnInit{


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

  // submitForexType(id: number|undefined) {
  //   this.adminService.setForexType(id).subscribe({
  //     next(data):=>{
  //       console.log(data);
  //       alert("Forex Card Type set successfully");
  //     },
  //     error(error){

  //     }
  //   })

}
