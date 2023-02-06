import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { gender, userRole } from 'src/app/model/user';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  gender: gender = gender.female
  userRole : userRole = "admin"
  // userForm: FormGroup = new FormGroup({})
  constructor(private fb: FormBuilder) {

  }
  userForm = this.fb.group({
    username: "",
    password: "",
    passwordCon: ["123",[],[]]
  })

  // passwordCon: FormControl = new FormControl('123')

  samePassword(): ValidationErrors | null {
    return { notSame: true }
  }

  // myAsyncValidator(){
  //   return 
  // }

  myAsyncValidatorFn(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log("this userForm in validator");
    console.log(this);
    
    console.log(this.userForm)
    return of({sameName: true})
  }

  checkStatus() {
    // console.log("this = ")
    // console.log(this)
    // console.log("this userForm = ")
    // console.log(this.userForm)
    // console.log("this userForm PasswordCon = ")
    // console.log(this.userForm.controls['passwordCon'])
  }

  // AsyncValidator vs AsyncValidatorFn
  myAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>{
      console.log(this)
      if(control.value === this.userForm.controls['password'].value){
        return of(null);
      }else{
        return of({AsyncNotSame: true})
      }
    }
  }


  ngOnInit(): void {
    console.log(this.gender)
    this.userForm.controls['passwordCon'].setAsyncValidators(this.myAsyncValidator())
  }

}
