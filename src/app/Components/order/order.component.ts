import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface DetailsElement{
  email:string,
  contact:number,
  address:string
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  displayedColumns: string[] = ['email','contact','address']
  dataSource = ELEMENT_DETAILS;

  constructor(public router:Router){}
  goToDashboard(){
    this.router.navigate(['/home']);
  }
}

const ELEMENT_DETAILS:DetailsElement[]=[
  {
    email:'nallamsunilkumar5@gmail.com',
    contact:7569614443,
    address:'VGN Southern Avenue, Chennai, Tamilnadu'
  }
];



