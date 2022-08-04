import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mid!:string

  loggedIn : boolean = false ;

  login(){
    
    this.loggedIn = true;
  }
  logout(){
    this.loggedIn  =false;
  }
  isLoggedIn(){
   
    return this.loggedIn;
  }
  constructor() { }
}