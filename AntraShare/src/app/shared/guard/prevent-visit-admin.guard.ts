import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventVisitAdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      const role = localStorage.getItem('role');
      if (role === 'admin') return true
      else if (role === 'user') {
        alert("You are not an admin and have no access to admin page")
        return false;
      }
      else {
        alert("Please login")
        return false;
      }
  }
  
}
