import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseurl = "http://localhost:4231/api/register";

  constructor(private http: HttpClient) { }

  availableEmail(): AsyncValidatorFn {
    return (control: AbstractControl):Observable<ValidationErrors | null> => {
      return this.checkEmail(control.value)
      .pipe(map(res => {
        if (res === 'Email is OK to use.') {
          return null;
        } else {
          return { availableEmail : false };
        }
      }))
    }
  }

  availableUsername(): AsyncValidatorFn {
    return(control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkUsername(control.value)
        .pipe(map(res => {
          if (res === 'username is OK to use') {
            return null;
          } else {
            return { availableUsername: false }
          }
        }))
    }
  }

  checkEmail(userEmail: string) {
    let getResult;
    var output = new Subject();
    this.http.get(this.baseurl + "/checkExistByEmail/:" + userEmail)
      .subscribe(result => {
        getResult = result;
        output.next(getResult);
      });
    return output.asObservable();
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
  

  postNewAccount(user: User): Observable<User> {
    return this.http.post<User>(this.baseurl + '/createNewAccount', user);
  }
}



