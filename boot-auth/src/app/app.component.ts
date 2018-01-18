import { MessageService } from './message.service';
import { AuthService } from './auth.service';
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

  errors: string[] = [];

  constructor(private httpClient: HttpClient, private authService: AuthService, private messageService: MessageService) {}

  login(form: NgForm) {
    this.authService.login(form.value.username, form.value.password)
    .subscribe(
      res => {
        form.reset();
      },
      err => console.error(err));
  }

  userIsLoggedIn() {
    return this.authService.checkLogin();
  }

  userLogout() {
    this.authService.logout();
  }

  getMessages() {
    this.messageService.getMessages()
      .subscribe(
        res => this.messages = res,
        err => console.error(err)
      );
  }

}
