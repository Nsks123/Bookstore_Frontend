import { Component, OnInit } from '@angular/core';
import { BookEntity } from './data';
import { BookService } from '../../Services/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrl: './displaybooks.component.scss'
})
export class DisplaybooksComponent implements OnInit{
  
  panelOpenState=false;
  data!:any;
  constructor(private books:BookService,public router:Router){}
   ngOnInit(): void {
     this.onSubmit()
 }
 
  onSubmit(){
    this.books.getbooks().subscribe((res:any)=>{
      console.log(res);
      this.data=res.data;
    })
  }
  lowtohigh(){
    this.books.getbooksbyprice().subscribe((response:any)=>{
      console.log(response);
      this.data=response.data;
    })
  }

  hightolow(){
    this.books.getbooksbypricedesc().subscribe((response:any)=>{
      console.log(response);
      this.data=response.data;
    })
  }

  newarrival(){
    this.books.newarrivals().subscribe((response:any)=>{
      console.log(response);
      this.data=response.data;
    })
  }
  ns(id:number){
    this.router.navigate(["/view",id])

  }
  
}
