import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { UserInfoService } from 'src/app/core/services/user-info.service';
import { RegisterService } from './register.service';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted = true;
  confirmPassword = new FormControl('nowyouseemypassword')

  constructor(private formBuilder: FormBuilder, private userInfoService: UserInfoService, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ["John Doe", [Validators.required], [this.asyncValidatorForUserName()]],
      password: ['nowyouseemypassword', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z$@$!%*?&].{6,20}'), this.matchPassword(this.confirmPassword)]],
      userEmail: ['jdoe1@yahoo.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")], [this.asyncValidatorForUserEmail()]],
    })
  }

  onSubmit(){
    const userName = this.registerForm.get('userName')?.value;
    const password = this.registerForm.get('password')?.value;
    const userEmail = this.registerForm.get('userEmail')?.value;
    this.registerForm.setValue({
      userName: userName,
      password: password,
      userEmail: userEmail,
    });


    this.registerService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(
      val => {
        console.log('Registration successful')
        this.submitted = true
        this.router.navigate(['/login'])
    },
      error => {
        this.submitted = false
        console.error(error)
      }
    )
  }

  matchPassword(matchingControl: FormControl){
    return (control: AbstractControl) => {
      const controlValue = control.value
      const matchingControlValue = matchingControl.value

      if (controlValue !== matchingControlValue){
        matchingControl.setErrors({mustMatch: true})
      } else {
        matchingControl.setErrors(null)
      }
    }
  }

  asyncValidatorForUserName():AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return this.userInfoService.checkUserName(control.value).pipe(map(res => {
          return res ? { userNameAlreadyExists: true } : null;
        }))
    }
  }

  asyncValidatorForUserEmail() :AsyncValidatorFn{ 
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return this.userInfoService.checkUserEmail(control.value).pipe(map((res) => {
          console.log(res)
          return res ? { userEmailAlreadyExists: true } : null;
        }))
    }
  }
}
