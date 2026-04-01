import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User> = this.userSubject.asObservable();
  constructor(private http: HttpClient, private toastService: ToastrService) { 
    this.userObservable=this.userSubject.asObservable(); 
  }
   currentUser():User {
    return this.userSubject.value;
  }
  login(userlogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userlogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user)
          this.userSubject.next(user);
          this.toastService.success(
            `Welcome to Foodmine ${user.name}!`,
            'Login Successful'
          )
        },
        error: (err) => {
          this.toastService.error(err.error, 'Login Failed')
        }
      })
    )
  }
  register(userRegister:IUserRegister):Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastService.success(
            `Welcome to the Foodmine ${user.name}`,
            'Register Successful'
          )
        },
    error:(err)=>{
      this.toastService.error(err.error,'Register Faild')
    }
      })
    )

  }
  logout(){
    this.userSubject.next(new User);
    localStorage.removeItem(USER_KEY);
    window.location.reload()
  }
  private setUserToLocalStorage(user:User){
localStorage.setItem(USER_KEY,JSON.stringify(user))
  }

  private getUserFromLocalStorage():User{
const userJson=localStorage.getItem(USER_KEY);
if(userJson) return JSON.parse(userJson);
return new User();
  }
}
