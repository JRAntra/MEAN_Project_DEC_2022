import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/shared/services/user-info.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted = false;
  confirmPassword = new FormControl('nowyouseemypassword')

  constructor(private formBuilder: FormBuilder, private userInfoService: UserInfoService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ["John Doe", [Validators.required, this.asyncValidatorForUserName()]],
      password: ['nowyouseemypassword', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z$@$!%*?&].{6,20}'), this.matchPassword(this.confirmPassword)]],
      userEmail: ['jdoe1@yahoo.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), this.asyncValidatorForUserEmail()]],
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


    this.userInfoService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(val => {
      console.log('Registration successful')
      this.submitted = true
      this.router.navigate(['/login'])
    })
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

  asyncValidatorForUserName(){
    return (control: AbstractControl) => {
      if (control.value.length !== 0){
        this.userInfoService.checkUserName(control.value).subscribe(val => {
          // console.log(val)
          if (val) control.setErrors({'userNameAlreadyExists': true})
          else return null
        })
      } else return null
    }
  }

  asyncValidatorForUserEmail(){
    return (control: AbstractControl) => {
      if (control.value.length !== 0){
        this.userInfoService.checkUserEmail(control.value).subscribe(val => {
          // console.log(val)
          if (val) control.setErrors({'userEmailAlreadyExists': true})
          else return null
        })
      } else return null
    }
  }
}
