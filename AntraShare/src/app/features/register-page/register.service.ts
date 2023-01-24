import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'http://localhost:4231';

  constructor(private http: HttpClient) { }

  register(user: User) {
        return this.http.post(`${this.apiUrl}/api/register/createNewAccount`, user);
  }

}
