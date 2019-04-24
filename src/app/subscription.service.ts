import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService{

  subscribers: string[];

  constructor() { 
    let storedSubscribers = JSON.parse(localStorage.getItem('subscribers'));
    if(storedSubscribers){
      this.subscribers = storedSubscribers;
    }
    else{
      this.subscribers = [];
    }
  }

  subscribe(email: string):boolean {
    if(this.subscribers.includes(email)){
      return false;
    }
    this.subscribers.push(email);
    localStorage.setItem('subscribers', JSON.stringify(this.subscribers));
    return true;
  }

  logSubscribers() {
    console.log(this.subscribers);
  }

  getSubscribers() {
    return(this.subscribers);
  }
}
