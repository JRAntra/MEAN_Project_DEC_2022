import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameProfilePageService {

  constructor(private http: HttpClient) { }

  checkUserName(name: string): Observable<any> {
    return this.http.get("http://localhost:4231/api/register/checkExistByUsername/"+name)
  }
}
