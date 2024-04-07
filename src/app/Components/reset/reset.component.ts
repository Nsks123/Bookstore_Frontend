import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent implements OnInit {
  ResetForm!:FormGroup;
  
  constructor(private formbuilder:FormBuilder,private userService :UserService){}
  ngOnInit(): void {
    
    this.ResetForm=this.formbuilder.group({
     
      email: ['',[Validators.required,Validators.email]],
  })

  
}
ForgotSubmit(){let reqData={
  email:this.ResetForm.value.email,
}
console.log(reqData);
this.userService.forgetPassword(reqData).subscribe((res:any)=>{
  console.log(res);
})
}

}
