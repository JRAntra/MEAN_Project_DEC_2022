import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginService } from './login/login.service';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  userRole!: string | undefined

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cacheService: CacheService
    ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      this.userRole = this.cacheService.getUserInfo()?.userRole.toLowerCase()
      console.log(this.userRole);
      if(this.userRole === "admin") {
        return of(true);
      } else {
        console.log("Sorry, you cannot access this page");
        return of(false);
      }
  }
  
}
