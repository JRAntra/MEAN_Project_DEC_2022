import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  checkUserExistUrl = 'http://localhost:4231/api/register/checkExistByUsername';
  constructor(private http: HttpClient) {}
  checkUserExist(username: string): Observable<Boolean> {
    return this.http.get<boolean>(`${this.checkUserExistUrl}/${username}`);
  }
}
