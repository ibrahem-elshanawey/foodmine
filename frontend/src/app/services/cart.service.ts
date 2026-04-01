import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=this.getFromLocalStorage();
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart);
addToCart(food:Food):void{
  let cartItem=this.cart.items.find(item=>item.food.id==food.id);
  if(cartItem)
    return;
  this.cart.items.push(new CartItem(food))
  this.setLocalStorage();
}
removeFromCart(foodId:string):void{
this.cart.items=this.cart.items.filter(item=>item.food.id != foodId);
  this.setLocalStorage();


}
changeQuantity(foodId:string,quantity:number){
 let cartItem=this.cart.items.find(item=>item.food.id==foodId);
  if(!cartItem)
    return;
 cartItem.quantity=quantity;
 cartItem.price=quantity * cartItem.food.price;
  this.setLocalStorage();

}
clearCart(){
  this.cart=new Cart();
  this.setLocalStorage();

}
getCartObservable():Observable<Cart>{
  return this.cartSubject.asObservable();
}
getCart():Cart  {
 return this.cartSubject.value;
}
setLocalStorage(){
  this.cart.totalPrice=this.cart.items.reduce((prevsum,currentsum)=>prevsum + currentsum.price,0);
  this.cart.totalCount=this.cart.items.reduce((prevsum,currentsum)=>prevsum + currentsum.quantity,0);
  let cartJson=JSON.stringify(this.cart);
  localStorage.setItem('Cart',cartJson);
  this.cartSubject.next(this.cart)
}
getFromLocalStorage(){
const cartJson=localStorage.getItem('Cart');
return cartJson?JSON.parse(cartJson):new Cart();
}
}
