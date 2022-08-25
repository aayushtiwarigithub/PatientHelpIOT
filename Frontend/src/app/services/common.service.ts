import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { handleErrorObservable } from '../shared/utilities/helper';
import { APIENDPOINTConstants } from '../shared/constants/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  GetResult(userInput:any){
    debugger;
    const url = APIENDPOINTConstants.GETRESULT;
     var formData: any = new FormData();
     formData.append(0,"[62, 0, 124, 209, 0, 1, 163]");
     formData.append(5,"[35, 0, 138, 183, 0, 1, 182]");
     formData.append(8,"[45, 1, 128, 308, 0, 0, 170]");
     formData.append(9,"[71, 0, 160, 302, 0, 1, 162]");
     formData.append(10,"[54, 0, 132, 288, 1, 0, 159]");
     formData.append(1,"[62, 0, 130, 263, 0, 1, 97]");
     formData.append(2,"[46, 1, 140, 311, 0, 1, 120]");
     formData.append(3,"[43, 1, 120, 177, 0, 0, 120]");
     formData.append(4,"[65, 1, 138, 282, 1, 0, 174]");
    
     formData.append(6,"[57, 1, 154, 232, 0, 0, 164]");
     formData.append(7,"[43, 0, 132, 341, 1, 0, 136]");
    
     formData.append(11,"[52, 1, 108, 233, 1, 1, 147]");
     formData.append(12,"[63, 0, 135, 252, 0, 0, 172]");
    return this.http.post<any>(url, formData).pipe(
      catchError(handleErrorObservable<any>('GETRESULT'))
    );
  }

  sendSMS(){
    debugger;
    const url = APIENDPOINTConstants.SENDSMS;
    return this.http.get<any>(url).pipe(
      catchError(handleErrorObservable<any>('SENDSMS'))
    );
  }
 
}
