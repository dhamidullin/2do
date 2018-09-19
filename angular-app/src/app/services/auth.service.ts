import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: Http
  ) { }

  private saveToken(token) {
    window.localStorage.setItem('token', token);
  }
  private removeToken() {
    window.localStorage.removeItem('token');
  }
  private get token() {
    return window.localStorage.getItem('token');
  }

  public get isLoggedIn(): boolean {
    if (this.token) {
      var payload = JSON.parse(window.atob(this.token.split('.')[1]));

      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  public get username(): string {
    if (this.isLoggedIn) {
      var payload = JSON.parse(window.atob(this.token.split('.')[1]));

      return payload.username;
    }
  }

  register(user, callback) {
    this.http.post('/api/authentication/register', user).subscribe(
      response => {
        callback(response);
        this.saveToken(response.json().token);
      },
      response => {
        callback(response);
      });
  }
  logIn(user, callback) {
    this.http.post('/api/authentication/login', user).subscribe(
      response => {
        callback(response);
        this.saveToken(response.json().token);
      },
      response => {
        callback(response);
      }
    );
  }
  logOut() {
    this.removeToken();
  }
  ping() {
    let headers = new Headers();
    headers.append(
      'authorization', this.token
    );
    return this.http.get('/api/authentication/ping', { headers: headers });
  }
}
