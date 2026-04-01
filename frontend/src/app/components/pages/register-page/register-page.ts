import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { PasswordsMatchValidator } from '../../../shared/validators/password_match_validator';
import { User } from '../../../shared/models/User';
import { IUserRegister } from '../../../shared/interfaces/IUserRegister';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage implements OnInit {
registerForm!:FormGroup
isSubmitted=false;
returnUrl='';
constructor(private activatedroute:ActivatedRoute,private userService:UserService,private route:Router,private formBuilder:FormBuilder){}
  ngOnInit(): void {
   this.registerForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]],
    confirmpassword:['',Validators.required],
    address:['',[Validators.required,Validators.minLength(10)]]

   },{
    validators:PasswordsMatchValidator('password','confirmpassword')
   })
   this.returnUrl=this.activatedroute.snapshot.queryParams['returnUrl'];
  }
get fc(){
 return this.registerForm.controls;
}
submit(){
  this.isSubmitted=true;
  if(this.registerForm.invalid)return;
  const fv=this.registerForm.value;
  const user:IUserRegister={
    name:fv.name,
    email:fv.email,
    password: fv.password,
    confirmpassword: fv.confirmpassword,
    address: fv.address
  }
  this.userService.register(user).subscribe(_=>{
    this.route.navigateByUrl(this.returnUrl)
  })
}
}
