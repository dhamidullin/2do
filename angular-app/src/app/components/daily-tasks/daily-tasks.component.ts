import { Component, OnInit } from '@angular/core';
import { DailyTask } from '../../classes/daily-task';
import { HttpService } from '../../services/http.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.css']
})
export class DailyTasksComponent implements OnInit {

  dailyTasks: DailyTask[] = null;
  hour = 1000 * 60 * 60;

  constructor(
    private http: HttpService,
    private events: EventsService
  ) {
    this.events.refreshDailyTasksEvent.subscribe(() => {
      this.getDailyTasks();
    });
  }

  ngOnInit() {
    this.getDailyTasks();
    this.events.refreshTasksEvent.subscribe(() => {
      this.getDailyTasks();
    });
  }

  getDailyTasks() {
    this.http.getDailyTasks().subscribe(data => {
      this.dailyTasks = data.json().dailyTasks;

      this.dailyTasks.sort((a, b): number => {
        return (a.time - b.time);
      });
    });
  }
  deleteDailyTask(id) {
    this.http.deleteDailyTasks(id).subscribe(() => {
      this.events.refreshDailyTasksEvent.emit();
    });
  }
}
