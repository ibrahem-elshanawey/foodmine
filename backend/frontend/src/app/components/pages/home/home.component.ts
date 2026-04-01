import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];
  constructor(private foodeService:FoodService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
    let foodObservable:Observable<Food[]>;

      if(params['searchTerm'])
        foodObservable=this.foodeService.getAllfoodBySearchTerm(params['searchTerm']);
      else if(params['tag'])
        foodObservable=this.foodeService.getAllFoodByTag(params['tag'])
      else
        foodObservable=this.foodeService.getAll();

      foodObservable.subscribe((serverFoods)=>{
        this.foods=serverFoods;
      })
    })
  }
  ngOnInit(): void {
  }

}
