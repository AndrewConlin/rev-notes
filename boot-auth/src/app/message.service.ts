import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class MessageService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getMessages() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${token}`);

    const request = this.httpClient
      .get('http://localhost:9001/api/message', {headers});

    return request;
  }


}
