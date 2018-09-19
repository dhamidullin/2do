import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  start: number = 1000 * 60 * 60 * 10;
  end: number = 1000 * 60 * 60 * 22;

  constructor() { }

  ngOnInit() {
  }

}
