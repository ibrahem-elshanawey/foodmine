import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  isSubmited = false;
  returnUrl='';
  constructor(private formBuilder: FormBuilder,private userService:UserService,private activatedroute:ActivatedRoute,
    private route:Router
  ) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
    this.returnUrl=this.activatedroute.snapshot.queryParams['returnUrl'];
  }
  get fc() {
    return this.loginForm.controls;
  }
  submit() {
    this.isSubmited = true;
    if (this.loginForm.invalid) return;
   
     this.userService.login({email:this.fc['email'].value,password:this.fc['password'].value}).subscribe(()=>{
      this.route.navigateByUrl(this.returnUrl)
     })
  }
}
