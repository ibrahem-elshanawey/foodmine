import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { tap } from 'rxjs';
var penddingRequests=0
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  var loadingService=inject(LoadingService);
  loadingService.showloading();
  penddingRequests=penddingRequests + 1
  return next(req).pipe(
    tap({
      next:(event)=>{
if(event.type === HttpEventType.Response){
  penddingRequests=penddingRequests - 1
  if(penddingRequests === 0){
    loadingService.hideloading()
  }
}
      },
      error:(_)=>{
        penddingRequests=penddingRequests - 1
  if(penddingRequests === 0){
    loadingService.hideloading()
  }
      }
    })
  );
 
};
