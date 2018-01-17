import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  messages: string[] = [];

  constructor(private httpClient: HttpClient) {}

  login(form: NgForm) {
    const token = this.generateBasicAuthToken(form.value.username, form.value.password);
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${token}`);
    this.httpClient
      .get('http://localhost:9001/authenticate', {headers})
      .subscribe(
        r => {
          localStorage.setItem('token' , token);
          console.log(r);
          form.reset();
        },
        err => console.error(err));
  }

  getMessages() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${token}`);
    this.httpClient
      .get('http://localhost:9001/api/message', {headers})
      .subscribe(res => {
        console.log(res);
        this.messages = res;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  generateBasicAuthToken(username, password) {
    return btoa(`${username}:${password}`);
  }

}
