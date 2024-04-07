import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { CartService } from '../../Services/cart/cart.service';
import { BookEntity } from '../displaybooks/data';
import { CartEntity } from '../view/cart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../../Services/address/address.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  @Input() book!:BookEntity
  itemList:BookEntity[]=[];
  cartlist:CartEntity[]=[];
  addressForm!:FormGroup;
  id!:number;
  cartQnt!:number;
  clickOn:boolean=false;
  clickorder:boolean=false;
  constructor(public cartService:CartService, public bookService: BookService,private _formBuilder: FormBuilder,private addressService:AddressService,public route:ActivatedRoute,public router:Router){}
  ngOnInit(): void {
    this.getcart();
    this.addressForm=this._formBuilder.group({
      name:['',[Validators.required]],
      phNo:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      addressType:['',[Validators.required]]
    })
  }
  getcart(){
    this.cartService.getCart().subscribe((response:any)=>{
      console.log(response);
      this.cartlist=response.data;
      console.log(this.cartlist);
      for(let i=0;i<this.cartlist.length;i++)
      {
        this.bookService.getbooksbyid(this.cartlist[i].bookId).subscribe((response:any)=>{
          this.itemList.push(response.data);
          
        })
      }
    })
  }
   placed(){
    this.clickOn=true;
   }
  AddressSubmit(){
    this.clickorder=true
    let reqData={
      fullName:this.addressForm.value.name,
      mobileNumber:this.addressForm.value.phNo,
      address:this.addressForm.value.address,
      city:this.addressForm.value.city,
      state:this.addressForm.value.state,
      label:this.addressForm.value.addressType
    }
    this.addressService.addAddress(reqData).subscribe((response:any)=>{
      console.log(response);
    })
  }

  increase(id:number){
    if(id!=null){
      this.cartService.updatecart({},id).subscribe((response:any)=>{
        console.log(response)
          this.cartlist=response.data;
          this.cartQnt=response.data.cartQuantity;
      })
    }
  }

  decrease(id:number){
    if(id!=null){
      this.cartService.updatecartdesc({},id).subscribe((response:any)=>{
        console.log(response)
          this.cartlist=response.data;
          this.cartQnt=response.data.cartQuantity;
      })
    }
  }

  order(){
    this.router.navigate(["/order"])
  }
}



