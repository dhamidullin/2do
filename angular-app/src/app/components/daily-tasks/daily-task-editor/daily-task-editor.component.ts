import { Component, OnInit } from '@angular/core';
import { DailyTask } from '../../../classes/daily-task';
import { HttpService } from '../../../services/http.service';
import { EventsService } from '../../../services/events.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-task-editor',
  templateUrl: './daily-task-editor.component.html',
  styleUrls: ['./daily-task-editor.component.css']
})
export class DailyTaskEditorComponent implements OnInit {

  dailyTask: DailyTask = null;
  errorMessage = '';
  timezoneOffset = new Date().getTimezoneOffset() * 60000;
  id: string;

  constructor(
    private http: HttpService,
    private events: EventsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id) {
      this.http.getDailyTask(this.id).subscribe(date => {
        this.dailyTask = date.json().dailyTask;
      });
    }
    else {
      this.dailyTask = {
        title: 'Новая ежедневная задача',
        time: (new Date().getTime()) % (1000 * 60 * 60 * 24)
      }
    }
  }

  setDailyTaskTime(event) {
    this.dailyTask.time = new Date('1970-1-1 ' + event + ':00').getTime();
  }
  getDailyTaskTime() {
    let time = new Date(this.dailyTask.time);
    let res = `${time.getHours()}:${time.getMinutes()}`;

    return res;
  }
  saveDailyTask() {
    this.http.saveDailyTask(this.dailyTask, this.id).subscribe(
      data => {
        this.router.navigate(['/daily-tasks']);
        this.events.refreshDailyTasksEvent.emit();
      },
      data => {
        this.errorMessage = data.json().err;
      }
    );
  }
}
