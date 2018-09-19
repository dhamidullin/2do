import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @Input() size: number;
  arr60 = new Array(60);
  debug: boolean = false;
  datenow: Date = new Date();
  now: number = Date.now();
  sDeg: number = Math.round(this.now / 1000) * 6;
  mDeg: number = this.now / 1000 / 60 * 6;
  hDeg: number = (this.now / 1000 / 60 / 60 + 3) * 30;

  constructor() {
    setInterval(() => {

      this.sDeg = Math.round(this.now / 1000) * 6;
      this.mDeg = this.now / 1000 / 60 * 6;
      this.hDeg = (this.now / 1000 / 60 / 60 + 3) * 30;
      this.now = Date.now();
      this.datenow = new Date();
    }, 1000);
  }

  ngOnInit() {

  }
}
