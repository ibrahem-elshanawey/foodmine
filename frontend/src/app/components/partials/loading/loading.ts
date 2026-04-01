import { Component } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: false,
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class Loading {
  isloading!:boolean
constructor( isloadingservice:LoadingService){
  isloadingservice.isloading.subscribe((isloading)=>{
    this.isloading=isloading
  })
}
}
