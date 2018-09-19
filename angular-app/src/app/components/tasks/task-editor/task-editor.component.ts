import { Component, OnInit } from '@angular/core';
import { Task } from '../../../classes/task';
import { HttpService } from '../../../services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  task: Task = null;
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
      this.http.getTask(this.id).subscribe(date => {
        this.task = date.json().task;
      });
    }
    else {
      this.task = {
        title: 'Новая задача',
        datetime: new Date().getTime() + this.timezoneOffset
      }
    }
  }

  setTaskTime(event) { // от элемента input
    console.log(event);
    if (new Date(event))
      this.task.datetime = new Date(event).getTime();
  }
  getTaskTime() { // для элемента input
    let time = new Date(this.task.datetime);
    // 2018-09-09T15:00
    let res = `${time.getFullYear()}-${time.getMonth()}-${time.getDay()}T${time.getHours()}:${time.getMinutes()}`;

    return res;
  }
  savetask() {
    this.http.saveTask(this.task, this.id).subscribe(
      data => {
        this.router.navigate(['/tasks']);
        this.events.refreshTasksEvent.emit();
      },
      data => {
        this.errorMessage = data.json().err;
      }
    );
  }
}
