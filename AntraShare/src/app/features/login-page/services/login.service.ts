import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  checkUserExistUrl = 'http://localhost:4231/api/register/checkExistByUsername';
  constructor(private http: HttpClient) {}
  checkUserExist(username: string) {
    if (username !== null && username.length > 0) {
      return this.http.get<boolean>(`${this.checkUserExistUrl}/${username}`);
    }
    return null;
  }
}
