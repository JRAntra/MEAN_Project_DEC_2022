import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetrieveUserInfoService {

  constructor(private http: HttpClient) { }

  getUsersInfo() {
    return this.http.get('http://localhost:4231/api/users/getAllUsers')
  }
}
