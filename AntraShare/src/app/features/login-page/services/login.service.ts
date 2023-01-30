import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  checkUserExistUrl = 'http://localhost:4231/api/register/checkExistByEmail';
  constructor(private http: HttpClient) {}
  checkEmailExist(email: string): Observable<Boolean> {
    return this.http.get<boolean>(`${this.checkUserExistUrl}/${email}`);
  }
}
