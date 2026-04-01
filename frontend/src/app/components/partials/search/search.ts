import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchTerm='';
constructor(activatedRoute:ActivatedRoute,private route:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params['searchTerm'])
    this.searchTerm=params['searchTerm']
  })
}
search(term:string):void{
  this.route.navigateByUrl('/search/'+ term)
}
}
