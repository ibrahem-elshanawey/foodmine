import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: false,
  templateUrl: './food-page.html',
  styleUrl: './food-page.css'
})
export class FoodPage {
  food!:Food | undefined;
constructor(activatedroute:ActivatedRoute,foodservice:FoodService,private cartService:CartService,private route:Router){
activatedroute.params.subscribe((param)=>{
  if(param['id'])
  foodservice.getFoodById(param['id']).subscribe(serverFood=>{
   this.food=serverFood;
  })
})
}
addToCart(food:Food){
  this.cartService.addToCart(food);
  this.route.navigateByUrl('/cart-page')
}
}
