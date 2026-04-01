import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../shared/models/Tag';

@Component({
  selector: 'app-tags',
  standalone: false,
  templateUrl: './tags.html',
  styleUrl: './tags.css'
})
export class Tags {
tags?:Tag[];
constructor(foodservice:FoodService){
  foodservice.getAllTags().subscribe(serverTags=>{
    this.tags=serverTags
  });
}
}
