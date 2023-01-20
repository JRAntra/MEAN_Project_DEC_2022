import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {
  url = 'http://localhost:4231/api/users/getAllUsers';

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<any>{
    return this.http.get(this.url);
  }

}
