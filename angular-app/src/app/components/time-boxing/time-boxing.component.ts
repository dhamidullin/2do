import { Component, OnInit, Input } from '@angular/core';
import { Time } from '../../classes/time';

@Component({
  selector: 'app-time-boxing',
  templateUrl: './time-boxing.component.html',
  styleUrls: ['./time-boxing.component.css']
})
export class TimeBoxingComponent implements OnInit {

  today = 'Понедельник';
  boxes: any[] = null;
  events: any[] = null;
  timesArray: any[] = []
  hourHeight: number = 60;

  minute: number = 1000 * 60;
  hour: number = 1000 * 60 * 60;

  dayStart: Time = new Time(this.hour * 4);
  dayEnd: Time = new Time(this.hour * 22);

  @Input() start;
  @Input() end;

  constructor() {

    var n = 24
    for (let i = 0; i < n; i++) {
      this.timesArray.push({
        timeString: `${Time.getTimeString(i * 1000 * 60 * 60 * 24 / n)}`,
        height: this.hourHeight / (n / 24),
        milliseconds: i * 1000 * 60 * 60 * 24 / n
      });
    }
  }
  ngOnInit() {


    if (this.start && this.end) {
      this.dayStart = new Time(this.start);
      this.dayEnd = new Time(this.end);
    }


    this.boxes = [
      {
        _id: '0',
        title: 'HTML + CSS',
        body: ``,
        start: this.hour * 11,
        timeConsumption: this.minute * 20,
        owner_id: '231312'
      },
      {
        _id: '0',
        title: 'Javascript',
        body: `отжимания: 30\nприседания: 50\nпресс: 30\nскакалка: 100`,
        start: this.hour * 12 + this.minute * 0,
        timeConsumption: this.hour * 1 + this.minute * 20,
        owner_id: '231312'
      },
    ];
    this.events = [
      {
        _id: '5',
        title: 'Подъем',
        time: this.hour * 5,
        owner_id: '231312'
      },
      {
        _id: '7',
        title: 'Позвонить на счет заказа',
        time: this.hour * 15,
        owner_id: '231312'
      }
    ]
  }
}
