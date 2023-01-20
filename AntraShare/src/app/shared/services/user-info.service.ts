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
        console.log(user)
        return this.http.post(`${this.apiUrl}/api/register/createNewAccount`, user);
    }
  
  getAll(){
    return this.http.get(`${this.apiUrl}/api/users/getAllUsers`)
  }

  getByUsername(username:string){
    return this.http.get(`${this.apiUrl}/api/users//getProfile/${username}`)
  }
}
