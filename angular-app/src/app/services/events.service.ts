import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  refreshTasksEvent: EventEmitter<any> = new EventEmitter();
  refreshDailyTasksEvent: EventEmitter<any> = new EventEmitter();
  refreshNotes: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
