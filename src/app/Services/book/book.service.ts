import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpService: HttpService) { }
  getbooks(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    return this.httpService.getService('https://localhost:44324/api/Book/GetAllBooks',true,header);
  }
  getbooksbyprice(){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.getService('https://localhost:44324/api/Book/SortPriceInAsc',true,header)
  }

  getbooksbypricedesc(){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.getService('https://localhost:44324/api/Book/SortPriceInDes',true,header)
  }

  newarrivals(){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.getService('https://localhost:44324/api/Book/SortArrivalInDes',true,header)
  }
  getbooksbyid(bookId:any){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.getService('https://localhost:44324/api/Book/GetBookById?id='+bookId,true,header)
  }
  
}
