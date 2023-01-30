import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  jwt_decode  from 'jwt-decode';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { User, UserAccount } from 'app/shared/model/user';
import { map, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = "http://localhost:4231/api/login"
  tokenInfo!: User;
  tokenInfo$ = new Subject<User | undefined>()

  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.tokenInfo$.asObservable();
  }

  decodeToken(token:string) {
    this.tokenInfo = jwt_decode(token)
    this.tokenInfo$.next(this.tokenInfo)
  }

  postLogin(body: UserAccount) {
    return this.http.post(this.baseurl, body)
  }

}
