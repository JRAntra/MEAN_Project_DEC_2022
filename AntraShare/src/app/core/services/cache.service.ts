import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(
    private loginService: LoginService
  ) { }

  getUserInfo(): User | null {
    var userInfo = localStorage.getItem("userInfo");
    if (userInfo === null) {
      return null;
    } else {
      return JSON.parse(userInfo);
    }
  }
}
