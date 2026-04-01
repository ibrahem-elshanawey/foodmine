import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  cartQuantity=0;
  user!:User;
constructor(cartService:CartService,private userService:UserService){
cartService.getCartObservable().subscribe(cartquantity=>{
  this.cartQuantity=cartquantity.totalCount;
})
this.userService.userObservable?.subscribe(newuser=>{
  this.user=newuser

})
}
  ngOnInit(): void {

  }
logout(){
  this.userService.logout();
}
get isAuth() {
return this.user.token;
}
}
