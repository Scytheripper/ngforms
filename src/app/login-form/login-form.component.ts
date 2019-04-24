import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loginError = false;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['',Validators.required]
    });
  }

  authenticate()
  {
    if(this.loginForm.valid){
      let user = this.userService.login(this.loginForm.controls.email.value, 
                              this.loginForm.controls.password.value);
      if(user){
        this.loginError = false;
        console.log('Login Success!', this.userService.currentUser);
        this.router.navigateByUrl('/');
      }
      else{
        this.loginError = true;
        console.log('error');
      }
    }else{
      console.log('Login Failed');
    }
  }

}
