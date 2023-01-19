import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  apiUrl = 'http://localhost:4231';

  constructor(private http: HttpClient) { }

  register(user: User) {
        return this.http.post(`${this.apiUrl}/api/register/createNewAccount`, user);
    }
}
