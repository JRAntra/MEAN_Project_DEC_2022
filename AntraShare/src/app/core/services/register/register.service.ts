import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseurl = "http://localhost:4231/api/register";

  constructor(private http: HttpClient) { }

  postNewAccount(user: User): Observable<any> {
    return this.http.post(this.baseurl + '/createNewAccount', user);
  }
}



