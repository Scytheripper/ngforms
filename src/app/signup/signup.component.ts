import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  passwordNotMatching = false;
  userExists = false;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', [Validators.required, Validators.minLength(6)]],
      email:['', Validators.email],
    });
  }

  signup(){
    if(this.signupForm.controls.password.value === this.signupForm.controls.confirmPassword.value){
      this.passwordNotMatching = false;
      let user = new User();
      user.email = this.signupForm.controls.email.value;
      user.firstName = this.signupForm.controls.firstName.value;
      user.lastName = this.signupForm.controls.lastName.value;
      user.password = this.signupForm.controls.password.value;
      this.userService.addUser(user);
      this.router.navigateByUrl('/login');
      console.log('subscription Success!');
    }else{
      this.passwordNotMatching = true;
      console.log('subscription FAIl');
    }
  }

  

}
