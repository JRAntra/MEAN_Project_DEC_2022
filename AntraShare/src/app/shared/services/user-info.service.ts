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

  checkUserEmail(userEmail: string){
    return this.http.get(`${this.apiUrl}/api/register/checkExistByUsername/${userEmail}`)
  }

  checkUserName(userName: string){
    return this.http.get(`${this.apiUrl}/api/register/checkExistByUsername/${userName}`)
  }

  register(user: User) {
        return this.http.post(`${this.apiUrl}/api/register/createNewAccount`, user);
    }
  
  getAll(){
    return this.http.get(`${this.apiUrl}/api/users/getAllUsers`)
  }

  getByUsername(username:string){
    return this.http.get(`${this.apiUrl}/api/users/getProfile/${username}`)
  }

  login(userEmail:string, password:string){
    return this.http.post(`${this.apiUrl}/api/login/`, { userEmail,password})
  }
}
