import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  email: string;

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscriptionService.logSubscribers();
  }
  addSubscriber(form){
    if(this.subscriptionService.subscribe(this.email)){
      console.log('subscription Success!',form.value);
    }else{
      console.log('subscription FAIl');
    }
  }


}
