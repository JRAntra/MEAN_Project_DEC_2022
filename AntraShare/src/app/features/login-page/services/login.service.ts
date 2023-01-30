import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  checkUserExistUrl = 'http://localhost:4231/api/register/checkExistByEmail';
  loginUrl = 'http://localhost:4231/api/login';
  constructor(private http: HttpClient) {}
  checkEmailExist(email: string): Observable<Boolean> {
    return this.http.get<boolean>(`${this.checkUserExistUrl}/${email}`);
  }
  // email: string, password: string
  login(data: {
    userEmail: string;
    password: string;
  }): Observable<UserProfile> {
    return this.http.post<UserProfile>(this.loginUrl, data);
  }
}

type UserProfile = {
  name: string;
  userName: string;
  userEmail: string;
  userRole: string;
  age: number;
  gender: string;
  phone: number;
  bearerToken: string;
};
