import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Task } from '../../classes/task';
import { DailyTask } from '../../classes/daily-task';
import { EventsService } from '../../services/events.service';

class AnyTask {
  title: string;
  time: number;
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  /**
   * через httpService получить все таски на сегодня + ежедневные
   */
  tasks: Task[] = [];
  dailyTasks: DailyTask[] = [];
  timezoneOffset: number = new Date().getTimezoneOffset() * 60 * 1000;
  hour: number = 1000 * 60 * 60;
  arr24 = new Array(24);
  dayStart = 5;
  dayEnd = 24;
  levels = 5;

  get allTasks() {
    let allTasks = [];

    for (let i = 0; i < this.tasks.length; i++) {
      let task = {
        title: this.tasks[i].title,
        left: ((this.getTime(this.tasks[i].datetime) / this.hour - this.dayStart) / (24 - this.dayStart - (24 - this.dayEnd))) * 100,
        daily: false,
        top: 0
      };
      allTasks.push(task);
    }

    for (let i = 0; i < this.dailyTasks.length; i++) {
      let task = {
        title: this.dailyTasks[i].title,
        left: ((this.getTime(this.dailyTasks[i].time) / this.hour - this.dayStart) / (24 - this.dayStart - (24 - this.dayEnd))) * 100,
        daily: true,
        top: 0
      };
      allTasks.push(task);
    }

    allTasks.sort((a, b) => { return a.left - b.left; });

    let lastTop = 0;
    for (let i = 1; i < allTasks.length; i++) {
      if (allTasks[i].left - allTasks[i - 1].left < 100 / 24 * 1.5) {
        lastTop += 90 / this.levels;
        allTasks[i].top = lastTop;
      }
      else
        lastTop = 0;
    }
    return allTasks;
  }

  constructor(
    private http: HttpService,
    private events: EventsService
  ) { }

  ngOnInit() {
    this.events.refreshTasksEvent.subscribe(() => {
      this.getTasks();
    });
    this.events.refreshDailyTasksEvent.subscribe(() => {
      this.getDailyTasks();
    });
    this.getTasks();
    this.getDailyTasks();
  }

  getTasks() {
    let start = new Date();
    start.setHours(0, 0, 0, 0);
    let todayStart = start.getTime();

    let end = new Date();
    end.setHours(23, 59, 59, 999);
    let todayEnd = end.getTime();

    this.http.getTasks().subscribe(date => {
      this.tasks = [];
      let tasks = date.json().tasks;

      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (new Date(task.datetime).getTime() > todayStart && new Date(task.datetime).getTime() < todayEnd) {
          this.tasks.push(task);
        }
      }

      this.sortTasks();
    });
  }
  getDailyTasks() {
    this.http.getDailyTasks().subscribe(date => {
      this.dailyTasks = date.json().dailyTasks;

      this.sortAllTasks();
    });
  }

  sortTasks() {
    this.tasks.sort((a, b): number => {
      return (new Date(a.datetime).getTime() - new Date(b.datetime).getTime());
    });
  }
  sortDailyTasks() {
    this.dailyTasks.sort((a, b): number => {
      return (a.time - b.time);
    });
  }

  getTime(time) {
    return ((new Date(time).getTime() - this.timezoneOffset) % (this.hour * 24));
  }

  sortAllTasks() {
    this.allTasks.sort((a, b) => {
      return a.time - b.time;
    });
  }
}
