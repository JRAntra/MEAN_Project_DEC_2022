import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomepageComponent } from '../homepage/homepage/homepage.component';

@Injectable({
  providedIn: 'root'
})
export class CanUserLeaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log(component);
    // console.log(currentRoute);
    // console.log(currentState);
    // console.log(nextState);
    if((<HomepageComponent>component).electricalConsent.value === false)
    {
      alert("please checked the agreement before go to the next page")
    }
    return (<HomepageComponent>component).electricalConsent.value
    
    
    
    
    
      return true;
  }
  
}
