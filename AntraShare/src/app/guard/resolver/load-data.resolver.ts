import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadDataResolver implements Resolve<boolean> {

  constructor(private http: HttpClient){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
   return this.http.get('http://localhost:4231/api/news').pipe(
      delay(3000),
      tap(res => console.log(res)),
      map( res => {
        console.log(Boolean(res))
        return Boolean(res)})
         
      )
    
  }
}
