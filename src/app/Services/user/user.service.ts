import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }
  register(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    
    return this.httpservice.postService('https://localhost:44324/api/User/UserRegistration',reqData,false,header)
  }
  login(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }

    return this.httpservice.postService('https://localhost:44324/api/User/UserLogin',reqData,false,header)
  }
  forgetPassword(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpservice.postService('https://localhost:44324/api/User/Forgot?Email='+reqData.email,reqData,false,header)
  }
}
