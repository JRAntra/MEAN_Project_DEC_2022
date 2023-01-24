import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class RetrieveUserInfoService {

  constructor(private http: HttpClient) { }

  getUsersInfo() {
    return this.http.get<User[]>('http://localhost:4231/api/users/getAllUsers')
  }
}
