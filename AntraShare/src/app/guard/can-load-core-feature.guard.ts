import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadCoreFeatureGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route);
    console.log(segments);
    

        return of(true).pipe(delay(5000))

  }
}
