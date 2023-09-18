import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForexCardType } from 'src/app/dto/forex-card-type';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-forex-type',
  templateUrl: './add-forex-type.component.html',
  styleUrls: ['./add-forex-type.component.css']
})
export class AddForexTypeComponent  {

  constructor(private activeRouter:ActivatedRoute,
    private adminService:AdminServiceService,
    private router:Router){}

  forexCardType: ForexCardType= new ForexCardType();
  
  addForexType() {
    console.log(this.forexCardType);
      this.adminService.addForexType(this.forexCardType).subscribe({
        next:()=>{
          alert("Forex Card Type added successfully .");
          this.seeforexCardType();
        },
        error:(error: any)=>{
          console.log(error);
          alert("Sorry Unable to add ForexCardType .")
        }
      })
    }
    seeforexCardType(){
      this.router.navigate(['forextypes']);
    }

}
