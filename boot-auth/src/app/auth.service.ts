import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username, password) {
    // Make token
    const token = this.generateBasicAuthToken(username, password);
    // Send token as Authorization header (this is spring security convention for basic auth)
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${token}`);

    // create request
    const request = this.httpClient
      .get('http://localhost:9001/authenticate', {headers})

    // subscribe/handle response
    request
    .subscribe(
      res => {
        localStorage.setItem('token' , token);
        return res;
      },
      err => console.error(err)
    )

    // return request for additional subscription
    return request;
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

  /**
    - This auth strategy uses basic auth, which is "username:password" base64 encoded
    - btoa is a global function that encodes strings to base64
  */
  generateBasicAuthToken(username, password) {
    return btoa(`${username}:${password}`);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
