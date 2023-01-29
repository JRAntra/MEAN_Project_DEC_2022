import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  apiUrl = 'http://localhost:4231/api/users';

  constructor(
    private http: HttpClient
    ) { }

  getUserProfile(username: string){
    return this.http.get(`${this.apiUrl}/getProfile/` + username);

  }

}
