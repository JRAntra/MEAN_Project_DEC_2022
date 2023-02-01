import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/core/services/login/login.service';
import { UserAccount } from 'app/shared/model/user';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    userName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        this.upperCase,
        this.specialChar
      ]
    })
  })

  constructor(
    private router: Router,
    private loginService: LoginService
    ) {}

  ngOnInit(): void { }

  upperCase(control: AbstractControl): ValidationErrors | null {
    if (control.value !== control.value.toLowerCase()) {
      return null;
    } else {
      return { upperCase: false}
    }
  }

  specialChar(control: AbstractControl): ValidationErrors | null {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(control.value)){
        return null;
    } else {
        return { specialChar: false };
    }
  }

  onSubmit() {
//no var 
    const postBody: UserAccount = {
      userEmail: this.usernameValue.value ? this.usernameValue.value : '',
      password: this.passwordValue.value ? this.passwordValue.value : '',
    // console.log(this.loginForm. value)
  }
  
  this.loginService.postLogin(postBody)
    .subscribe((res: any) => {
      if(res != null) {
        this.loginService.decodeToken(res.bearerToken);
        this.router.navigate(['/newsfeed']);
      } else {
        this.loginForm.reset({
          userName: '',
          password: ''
        });
      }
      
    }
    )
}
  get usernameValue(): FormControl {
    return this.loginForm.get('userName') as FormControl
  }
  get passwordValue() {
    return this.loginForm.get('password') as FormControl
}

// get usernameValue() {
//     return this.loginForm?.get('username')?.value
// }

// get passwordValue() {
//     return this.loginForm?.get('password')?.value
// }
}
