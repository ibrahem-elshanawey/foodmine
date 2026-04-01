import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-page',
  standalone: false,
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css'
})
export class CheckoutPage implements OnInit {
order:Order=new Order();
checkoutForm!:FormGroup;
constructor(cartService:CartService, 
  private formBuilder:FormBuilder,
  private userService:UserService,
  private toasterService:ToastrService ){
const cart=cartService.getCart();
this.order.items=cart.items;
this.order.totalPrice=cart.totalPrice;
}
  ngOnInit(): void {
   let {name,address}=this.userService.currentUser();
   this.checkoutForm=this.formBuilder.group({
    name:[name,Validators.required],
    address:[address,Validators.required]

   })
  }
get fc(){
  return this.checkoutForm.controls;
}
createOrder(){
  if(this.checkoutForm.invalid){
    this.toasterService.warning('Please fill the inputs', 'Invalid Inputs')
    return;
  }
  this.order.name=this.fc['name'].value;
  this.order.address=this.fc['address'].value;
  console.log(this.order);
}
}
