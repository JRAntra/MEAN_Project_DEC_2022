import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

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
  validateUsername(): AsyncValidatorFn{
    console.log("Validator func")
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      console.log(control.value)
      return this.checkExist(control.value).pipe(
        map(res => {
          return {'usernameExists': res};
        })
      )
    }
    
  }
}
