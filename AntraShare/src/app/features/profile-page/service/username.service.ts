import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  url = 'http://localhost:4231/api/register/checkExistByUsername/';
  
  constructor(private http: HttpClient) {  }
  
  checkExist(name: string){
    return this.http.get(this.url + name);
  }
}
