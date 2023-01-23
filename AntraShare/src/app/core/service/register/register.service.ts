import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private createNewAccountUrl =
    'http://localhost:4231/api/register/createNewAccount';
  private checkUserNameExistUrl =
    'http://localhost:4231/api/register/checkExistByUsername/';

  private checkEmailUsedUrl =
    'http://localhost:4231/api/register/checkExistByEmail/';

  constructor(private http: HttpClient, private router: Router) {}
  register(user: user): Observable<any> {
    return this.http.post(this.createNewAccountUrl, user);
  }
  checkUserNameExist(userName: string | null | undefined): Observable<any> {
    return this.http.get(this.checkUserNameExistUrl + userName);
  }

  checkEmailUsed(email: string | null | undefined): Observable<any> {
    return this.http.get(this.checkEmailUsedUrl + email);
  }
}

type user = {
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  password: string | null | undefined;
};
