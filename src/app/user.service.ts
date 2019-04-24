import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[];
  currentUser: User;

  constructor() { 
    let storedUsers = JSON.parse(localStorage.getItem('users'));
    let storedUser = JSON.parse(localStorage.getItem('currentUser'));

    if(storedUsers){
      this.userList = storedUsers;
    }
    else{
      this.userList = [];
    }

    if(storedUser){
      this.currentUser = storedUser;
    }
    else{
      this.currentUser = null;
    }
  }

  emailExists(email:string): boolean {
    if(this.userList.filter(user => user.email === email).length !== 0){
      return true;
    }
    else{
      return false;
    }
  }

  addUser(user: User) {
    this.userList.push(user); 
    localStorage.setItem('users', JSON.stringify(this.userList));
  }

  login(email:string, password:string){
    let validUser = this.userList.filter((user) => user.email === email && user.password === password);
    if(validUser.length != 1) {
      return null;
    }
    else {
      this.currentUser = validUser[0]; 
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return this.currentUser;
    }
  }

  logout() {
    this.currentUser = null;
  }
  
}
