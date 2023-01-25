import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { User } from 'app/shared/model/user';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = "http://localhost:4231/api/login"

  constructor(private http: HttpClient) { }

  availableUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkUsername(control.value)
        .pipe(map(res => {
          if (res === 'username is good to use') {
            return null;
          } else {
            return { availableUsername: false }
          }
        }))
    }
  }

  checkUsername(username: string) {
    let getResult;
    var output = new Subject();
    this.http.get(this.baseurl + "/checkExistByUsername/:" + username)
      .subscribe(result => {
        getResult = result;
        output.next(getResult);
      });
    return output.asObservable();
  }


}
