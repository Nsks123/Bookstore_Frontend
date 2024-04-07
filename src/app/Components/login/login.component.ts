import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  hide = true;
  submitted=false;
  loginForm!:FormGroup;
  registerForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private userService :UserService,private route:Router){}
  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
     
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
        
    })
    
    this.registerForm=this.formbuilder.group({
  
      fullname: ['',[Validators.required,Validators.pattern('^[A-Z][a-z]+ [A-Z][a-z]*')]],       
       email: ['',[Validators.required,Validators.email]],
       password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
       mobile_number:['',[Validators.required,Validators.pattern('^[7-9][0-9]{9}$')]]
       
   })
  }
  LoginSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
      let reqData={
        emailid:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.userService.login(reqData).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem("token",res.data);
        this.route.navigateByUrl("home");
        
      })
    }
    else{console.log("Invalid Inputs")}
 
}
RegisterSubmit(){
  let reqData={
    fullName:this.registerForm.value.fullname,
    emailid:this.registerForm.value.email,
    password:this.registerForm.value.password,
    mobileNumber:this.registerForm.value.mobile_number
  }
  console.log(reqData);
  this.userService.register(reqData).subscribe((res:any)=>{
    console.log(res);
  })
}
}
