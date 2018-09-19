import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user: any = {
    username: '',
    password: '',
    repeatingpassword: ''
  }
  errorMessage = ' ';
  clearError() {
    this.errorMessage = ' ';
  }

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  register() {
    console.log(this.user);
    this.auth.register(this.user, (data) => {
      console.log(data);

      if (data.status == 200)
        this.router.navigate(['/home']);
      else
        this.errorMessage = data.json().message;
    });
  }
}
