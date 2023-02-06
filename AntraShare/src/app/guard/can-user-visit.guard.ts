import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from '../services/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class CanUserVisitGuard implements CanActivate {
  constructor(private userService: UserInfoService){

  }
  canActivate(
    route: ActivatedRouteSnapshot): boolean {
      if(route.data['name'] === "JR"){
        return true;
      }else{
        console.log("user is not permitted")
        return false;
      }
  }
  
}
