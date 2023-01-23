import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  url = 'http://localhost:4231/api/register/checkExistByUsername/';
  
  constructor(private http: HttpClient) {  }
  
  checkExist(name: string): Observable<any>{
    const output = new Subject();
    let getResult;
    this.http.get(this.url + name).subscribe(reuslt => {
      getResult = reuslt;
      output.next(getResult);
    });
    return output.asObservable();
  }
}
