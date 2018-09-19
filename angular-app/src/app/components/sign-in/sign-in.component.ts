import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  user: any = {
    username: '',
    password: ''
  }
  errorMessage = ' ';
  clearError() {
    this.errorMessage = ' ';
  }

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  login() {
    console.log(this.user);
    this.auth.logIn(this.user, data => {
      console.log(data);

      if (data.status == 200)
        this.router.navigate(['/home']);
      else
        this.errorMessage = data.json().message;
    });
  }
}
