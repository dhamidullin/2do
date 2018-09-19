import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent {

  response: any = {};

  constructor(
    private auth: AuthService
  ) { }

  ping() {
    this.auth.ping().subscribe(data => {
      this.response = data.json();
    });
  }

}
