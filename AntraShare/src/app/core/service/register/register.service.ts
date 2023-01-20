import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerUrl = 'http://localhost:4231/api/register/createNewAccount';

  constructor(private http: HttpClient, private router: Router) {}
  register(user: user): Observable<any> {
    return this.http.post(this.registerUrl, user);
  }
}

type user = {
  userName: string;
  userEmail: string;
  password: string;
};
