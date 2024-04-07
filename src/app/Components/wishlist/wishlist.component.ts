import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../../Services/wishlist/wishlist.service';
import { BookService } from '../../Services/book/book.service';
import { BookEntity } from '../displaybooks/data';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit{
  whislist:any;
  wishlistitems:BookEntity[]=[];
  constructor(public wish:WishlistService,public bookservice:BookService){}
  ngOnInit(): void {
    this.wish.getallwish().subscribe((response:any)=>{
      //console.log(response)
      this.whislist=response.data;
      console.log(this.whislist);
      for(let i=0;i<this.whislist.length;i++)
        {
          this.bookservice.getbooksbyid(this.whislist[i].bookId).subscribe((response:any)=>{
            this.wishlistitems.push(response.data);
            console.log(this.wishlistitems[i]);
          })
        }
    })
    
  }
  delete(wishlistid:number){
    console.log(wishlistid)
    this.wish.deletefromWishlist(wishlistid).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
