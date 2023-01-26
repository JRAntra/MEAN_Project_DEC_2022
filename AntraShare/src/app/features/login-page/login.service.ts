import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://localhost:4231';

  constructor(private http: HttpClient) { }

  login(userEmail:string, password:string){
    return this.http.post(`${this.apiUrl}/api/login/`, { userEmail,password})
  }
}
