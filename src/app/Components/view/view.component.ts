import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../Services/cart/cart.service';
import { CartEntity } from './cart';
import { WishlistService } from '../../Services/wishlist/wishlist.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit{
  data:any
  value:boolean=true;
 ngOnInit(): void {
   this.book.getbooksbyid(parseInt(this.bookid)).subscribe(res=>{
    console.log(res)
    this.data=res
    this.data = this.data.data
   },
   error=>{
    console.log(error)
   })
 }
 display(){
  this.route.navigate(["/home"])
 }
 addToCart(){
    this.value=false;
  const idParam = this.active.snapshot.paramMap.get('id');
  if(idParam!=null){
    this.cart.addtoCart({},idParam).subscribe((response:any)=>{
      console.log(response)
        this.cartlist=response.data;
    })
  }
}
addTowish(booknumber:any){
  this.wish.addtowish(booknumber).subscribe((res:any)=>{
    console.log(res);
  })
}
 bookid:any
 bookimg!:string
 cartlist:CartEntity[]=[]
 constructor(private active:ActivatedRoute,private route:Router,private book:BookService,private cart:CartService,private wish:WishlistService){
  this.bookid = this.active.snapshot.paramMap.get('id')
 }
}
