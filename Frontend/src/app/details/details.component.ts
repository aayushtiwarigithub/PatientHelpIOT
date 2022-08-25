import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  informDoctor:any;
messageSent:any;
  constructor(private _commonService: CommonService, private toastr: ToastrService) { }

  ngOnInit(): void {
   this.messageSent = false;
   this.informDoctor = false;
  }
  sendSMSMessage(){
    this.informDoctor = true;
    //this.messageSent = false;
    //this.toastr.success("Informed the doctor successfully.");
    debugger;
    this._commonService.sendSMS().subscribe(res=>{
     if(res){
      this.messageSent = true;
      this.informDoctor = false;
      this.toastr.success("Informed the doctor successfully.")
      // console.log(res);
     }
    })
  }

}
