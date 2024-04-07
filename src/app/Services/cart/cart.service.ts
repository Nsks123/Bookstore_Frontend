import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:any;

  constructor(private httpService:HttpService) { this.token=localStorage.getItem('token')}

  addtoCart(reqData:any,bookId:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44324/api/Cart/AddCart?bookid='+bookId,reqData,true,header);
  }

  getCart(){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44324/api/Cart/GetAllCart',true,header);
  }
  updatecart(reqData:any, bookId:number){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44324/api/Cart/UpdateCart?bookid='+bookId,reqData,true,header)
  }
  updatecartdesc(reqData:any, bookId:number){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44324/api/Cart/UpdateCart1?ProductId='+bookId,reqData,true,header)
  }

}
