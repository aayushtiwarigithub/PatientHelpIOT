import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  resultArray:any=[];
  parameters=[50, 1, 144, 200, 0, 0, 126];
  
    //[58, 0, 120, 340, 0, 1, 172], [50, 1, 140, 233, 0, 1, 163], [62, 0, 124, 209, 0, 1, 163], [39, 1, 118, 219, 0, 1, 140], [43, 1, 110, 211, 0, 1, 161], [51, 0, 120, 295, 0, 0, 157], [52, 1, 134, 201, 0, 1, 158], [61, 1, 140, 207, 0, 0, 138], [55, 0, 180, 327, 0, 2, 117], [56, 1, 120, 236, 0, 1, 178], [44, 1, 130, 219, 0, 0, 188], [46, 1, 101, 197, 1, 1, 156], [44, 1, 110, 197, 0, 0, 177], [41, 1, 112, 250, 0, 1, 179], [68, 1, 118, 277, 0, 1, 151], [71, 0, 112, 149, 0, 1, 125], [52, 1, 172, 199, 1, 1, 162], [42, 1, 140, 226, 0, 1, 178], [57, 1, 140, 192, 0, 1, 148], [47, 1, 112, 204, 0, 1, 143], [54, 1, 120, 188, 0, 1, 113], [49, 1, 130, 266, 0, 1, 171], [76, 0, 140, 197, 0, 2, 116], [63, 0, 150, 407, 0, 0, 154], [42, 1, 148, 244, 0, 0, 178], [63, 0, 108, 269, 0, 1, 169], [56, 1, 125, 249, 1, 0, 144], [41, 1, 110, 172, 0, 0, 158], [58, 1, 146, 218, 0, 1, 105], [52, 0, 136, 196, 0, 0, 169], [52, 1, 125, 212, 0, 1, 168], [59, 1, 160, 273, 0, 0, 125], [53, 1, 140, 203, 1, 0, 155], [66, 0, 150, 226, 0, 1, 114], [60, 1, 140, 185, 0, 0, 155], [59, 1, 140, 177, 0, 1, 162], [44, 1, 120, 226, 0, 1, 169], [65, 1, 135, 254, 0, 0, 127]];
  status:any =""
  constructor(private _commonService: CommonService, private router:Router) { }

  ngOnInit(): void {
    this.checkResult();
  //  this.check1();
  }
 checkResult(){
    this._commonService.GetResult(this.parameters).subscribe(res=>{
      console.log(res);
      //this.resultArray = res;
      if (res) {
        res.forEach((x:any) => {
          if(x){
            this.resultArray.push("Critical");
          }
          else{
            this.resultArray.push("Stable");
          }
        });
      }   
      console.log(this.resultArray); 
    })
  }
  
  patientDetails(){
    this.router.navigate(['/details'], { skipLocationChange: true });
  }
}
