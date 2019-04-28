import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post('http://localhost:3000/api/user/login', data);
  }

  register(data) {
    return this.http.post('http://localhost:3000/api/user/register', data);
  }

}
