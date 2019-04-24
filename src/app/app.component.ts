import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Example';
  constructor(private userService: UserService){}

  userLoggedIn() {
    if(this.userService.currentUser !== null) {
      return true;
    }
    return false  ;
  }

  logout() {
    this.userService.logout();
  }
}
