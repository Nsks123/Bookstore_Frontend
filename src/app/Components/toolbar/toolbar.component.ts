import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit{
  display:boolean=true;
  token:any;
  decodevalues:any;
  constructor(public router:Router){}
  ngOnInit(): void {
    if((localStorage.getItem("token"))!=null){
      this.token=localStorage.getItem("token");
      this.decodevalues=jwtDecode(this.token);
      this.display=false;
      console.log(this.decodevalues);
    } 
  }
  cart(){
    this.router.navigate(["/cart"])
  }
  logout(){
    localStorage.removeItem("token");
    this.display=true;
  }
  login(){
    this.router.navigate(["/login"])
  }
  wishlist(){
    this.router.navigate(["/wishlist"])
  }
  wislist1(){
    this.router.navigate(["/wishlist"])
  } 
}

