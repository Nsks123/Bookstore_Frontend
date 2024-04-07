import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token:any;

  constructor(private httpService:HttpService) { this.token=localStorage.getItem('token')}

  addtowish(bookId:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44324/api/WishList/AddToWishList?bookid='+bookId,{},true,header);
  }

  getallwish(){
    let header={headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.getService('https://localhost:44324/api/WishList/GetAllWishList',true,header);
  }

  
  deletefromWishlist(bookid:any){
    let header={headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.DeleteService('https://localhost:44324/api/WishList/DeleteWishList?wishlistid='+bookid,true,header);
  }
}
