import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  usernameurl='http://localhost:4231/api/register/checkExistByUsername/';
  emailurl='http://localhost:4231/api/register/checkExistByEmail/';


  constructor(private http:HttpClient) { }
  checkRegisterName(username:string):Observable<boolean>{
    
    return this.http.get<boolean>(this.usernameurl+username);

  }
  checkRegisterEmail(email:string):Observable<boolean>{
    return this.http.get<boolean>(this.emailurl+email);

  }
}
