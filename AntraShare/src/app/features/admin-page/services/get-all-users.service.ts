import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/shared/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {
  url = 'http://localhost:4231/api/users/getAllUsers';

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

}
