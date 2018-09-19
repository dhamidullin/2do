import { Component, OnInit } from '@angular/core';
import { Task } from '../../classes/task';
import { HttpService } from '../../services/http.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = null;
  hour = 1000 * 60 * 60;
  hidePast: boolean = true;
  today: Date = new Date();
  timezoneOffset = new Date().getTimezoneOffset() * 60000;

  constructor(
    private http: HttpService,
    private events: EventsService
  ) {
    this.events.refreshTasksEvent.subscribe(() => {
      this.getTasks();
    });
  }

  ngOnInit() {
    this.getTasks();
  }

  isPast(date: Date) {
    return new Date(date) < new Date();
  }

  getTasks() {
    this.http.getTasks().subscribe(date => {
      this.tasks = date.json().tasks;

      this.tasks.sort((a, b): number => {
        return (a.datetime - b.datetime);
      });
    });
  }
  deleteTask(id) {
    this.http.deleteTasks(id).subscribe(data => {
      this.getTasks();
    });
  }
  isToday(time) {

    let start = new Date();
    start.setHours(0, 0, 0, 0);
    let end = new Date();
    end.setHours(23, 59, 59, 999);

    return new Date(time) > start && new Date(time) < end;
  }
}
