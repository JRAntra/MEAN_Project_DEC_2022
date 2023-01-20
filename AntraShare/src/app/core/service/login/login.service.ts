import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = 'http://localhost:4231/api/login';

  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }
}
