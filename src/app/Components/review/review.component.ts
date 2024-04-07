import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
   colors:string[]=["red","yellow","green","blue"];
   currentindex:number=0;
   divcolor:string="red";
   buttonnameindex:number = this.currentindex+1
   buttonname:string = this.colors[this.buttonnameindex]
   changeColor(){
    this.currentindex=(this.currentindex + 1)%(this.colors.length);
    this.divcolor=this.colors[this.currentindex];
    this.buttonnameindex = (this.currentindex+1)%(this.colors.length);
    this.buttonname=this.colors[this.buttonnameindex]
   }
}
