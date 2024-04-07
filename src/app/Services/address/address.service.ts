import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  token:any;
  constructor(private httpService:HttpService) { this.token=localStorage.getItem('token')}
  addAddress(reqData:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44324/api/Address/AddAddress',reqData,true,header);


  }
}
