import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForexCardType } from 'src/app/dto/forex-card-type';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update-forex-card-type',
  templateUrl: './update-forex-card-type.component.html',
  styleUrls: ['./update-forex-card-type.component.css']
})
export class UpdateForexCardTypeComponent implements OnInit{

  constructor(private activeRouter:ActivatedRoute,
    private adminService:AdminServiceService,
    private router:Router){}
  id!:number;
  forexCardType: ForexCardType= new ForexCardType();

  ngOnInit(): void {
    this.id=this.activeRouter.snapshot.params['id'];
    console.log(this.id);
      this.adminService.getForexCardTypeById(this.id).subscribe({
      next:(data)=>{
      this.forexCardType=data;
      console.log(this.forexCardType);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  updateForexType(){
    this.adminService.updateForexCard(this.forexCardType).subscribe({
      next:()=>{
        alert("Data updated successfully!!!")
        this.router.navigate(['forextypes/']);
      },
      error:(error)=>{
        alert("Data is not updated successfully!!");
        this.router.navigate(['forextypes']);
      }
    })
  }

   
}
