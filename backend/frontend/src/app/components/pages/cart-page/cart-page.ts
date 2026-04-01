import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  standalone: false,
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage {
cart!:Cart;
constructor(private cartService:CartService){
this.cartService.getCartObservable().subscribe(cartitem=>{
  this.cart=cartitem;
})

}

removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id)
}

changeQuantity(cartItem:CartItem,quantitystring:string){
  const quantity=parseInt(quantitystring);
  this.cartService.changeQuantity(cartItem.food.id,quantity);
}
}
