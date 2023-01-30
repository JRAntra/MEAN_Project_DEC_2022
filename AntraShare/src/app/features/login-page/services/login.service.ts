import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginUser } from './LoginUser';

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
  login(data: LoginUser): Observable<Boolean> {
    console.log(data);
    // return of(true);
    return this.http.post<boolean>(this.loginUrl, data);
  }
}
