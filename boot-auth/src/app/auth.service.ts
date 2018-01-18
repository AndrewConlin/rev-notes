import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username, password) {
    const token = this.generateBasicAuthToken(username, password);
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${token}`);
    
    const request = this.httpClient
      .get('http://localhost:9001/authenticate', {headers})
      
    request
    .subscribe(
      res => {
        localStorage.setItem('token' , token);
        return res;
      },
      err => console.error(err)
    )

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

  generateBasicAuthToken(username, password) {
    return btoa(`${username}:${password}`);
  }

  getToken() {
    return localStorage.getItem('token'); 
  }


}
