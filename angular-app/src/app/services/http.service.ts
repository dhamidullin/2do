import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Task } from '../classes/task';
import { DailyTask } from '../classes/daily-task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: Http
  ) { }

  private get token() {
    return window.localStorage.getItem('token');
  }

  get headers(): Headers {
    let headers = new Headers();
    headers.append(
      'authorization', this.token
    );
    return headers;
  }
  // Tasks
  saveTask(task: Task, id?: string) {
    return this.http.put('/api/tasks/save', task, { headers: this.headers, params: { _id: id } });
  }
  getTask(id) {
    return this.http.get('/api/tasks/getOneById', { headers: this.headers, params: { _id: id } });
  }
  getTasks(start?, end?) {
    return this.http.get('/api/tasks/getAll', { headers: this.headers, params: {} });
  }
  deleteTasks(id) {
    return this.http.delete('/api/tasks/deleteOneById', { headers: this.headers, params: { _id: id } });
  }
  // DailyTasks
  saveDailyTask(task: DailyTask, id?: string) {
    return this.http.put('/api/daily-tasks/saveDailyTask', task, { headers: this.headers, params: { _id: id } });
  }
  getDailyTask(id) {
    return this.http.get('/api/daily-tasks/getDailyTaskById', { headers: this.headers, params: { _id: id } });
  }
  getDailyTasks(start?, end?) {
    return this.http.get('/api/daily-tasks/getAllDailyTasks', { headers: this.headers, params: {} });
  }
  deleteDailyTasks(id) {
    return this.http.delete('/api/daily-tasks/deleteDailyTaskById', { headers: this.headers, params: { _id: id } });
  }
  // Notes
  addNewNote() {
    return this.http.get('/api/notes/add', { headers: this.headers });
  }
  getOneNoteById(_id) {
    return this.http.get('/api/notes/getOneById', { headers: this.headers, params: { _id: _id } });
  }
  saveNote(note) {
    return this.http.put('/api/notes/saveNote', note, { headers: this.headers });
  }
  getNotes() {
    return this.http.get('/api/notes/allNotes', { headers: this.headers });
  }
  deleteNote(_id) {
    return this.http.delete('/api/notes/deleteNote', { headers: this.headers, params: { _id: _id } });
  }
  // board
  
}
