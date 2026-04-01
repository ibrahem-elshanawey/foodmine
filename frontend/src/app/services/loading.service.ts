import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isloadingsub=new BehaviorSubject<boolean>(false);

  showloading() {
     this.isloadingsub.next(true);
  }

    hideloading(){
     this.isloadingsub.next(false);
  }

  get isloading(){
    return this.isloadingsub.asObservable();
  }
}
