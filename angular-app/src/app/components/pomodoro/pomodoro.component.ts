import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {


  task: any = {
    title: '',
    time: 0
  };

  working: boolean = false;
  readyToStart: boolean = false;

  timeLeft: number = 0;
  mark: number = null;
  interval = null;
  displayNewTaskWindow: boolean = false;

  setMark(i) { this.mark = i; }

  newTask() {
    this.displayNewTaskWindow = true;
  }

  setTask() {
    if (this.task.title.length < 1)
      return alert('Введите заголовок');
    if (this.task.time <= 0)
      return alert('Введите время');
    this.displayNewTaskWindow = false;
    this.readyToStart = true;
  }

  start() {

    /**
     * сохранить в бд
     */

    let startDate = Date.now();
    let endDate = startDate + this.task.time;

    this.working = true;

    this.interval = setInterval(() => {
      let newTimeLeft = endDate - Date.now();

      if (newTimeLeft > 0)
        this.task.time = newTimeLeft;
      else {
        // save or drop
        clearInterval(this.interval);

        this.task.time = 0;
        this.mark = 3;  // это отображает форму для выставления оценки 
        // своей работы, функция выставления оценки после выполнения скроет форму
      }
    }, 250);
  }

  save() {
    if (!confirm('Сохранить с оценкой ' + this.mark))
      return;

    /**
     * сохранить в бд, дело закончено, оценка...
     */
    alert('Сохранено');
    this.drop(false);
  }

  drop(user: boolean) {
    if (user)
      if (!confirm('Точно сбросить таймер?')) {
        // set all defaults

        /**
         * удалить из бд если user
         */

        clearInterval(this.interval);
        this.mark = null;
        this.task = {
          title: '',
          time: 1500
        };
        this.working = false;
        this.readyToStart = false;
        console.log('default');
        console.log(this);
      }
  }

  constructor() { }

  ngOnInit() {

  }
}
