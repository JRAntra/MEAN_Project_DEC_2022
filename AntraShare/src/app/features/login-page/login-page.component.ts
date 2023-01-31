import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, switchMap, take } from 'rxjs';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  successLogin = new FormControl();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userEmail: new FormControl('', {
        validators: [this.validateEmailExist()],
      }),
      password: new FormControl('', {
        validators: [Validators.minLength(8)],
      }),
    });
  }

  validateEmailExist() {
    return (control: AbstractControl) => {
      if (control?.value.length !== 0) {
        control.valueChanges
          ?.pipe(
            debounceTime(500),
            switchMap((email) => this.loginService.checkEmailExist(email)),
            take(1) // it runs.complete function after emit the first value(unsubscribe itself)
          )
          .subscribe((exist) => {
            if (!exist) control.setErrors({ nonexist: true });
          });
      }
      return null;
    };
  }

  onSubmit(): void {
    this.loginService.login(this.loginForm.value).subscribe({
      next: (userProfile: UserProfile) => {
        // TODO
        // 1. set token to login user
        // 2. redirect to home page
        
        console.log(userProfile);
        localStorage.setItem('token', userProfile.bearerToken)
        localStorage.setItem('role', userProfile.userRole)
        this.onLogin()
        
      },
      error: (error) => this.successLogin.setErrors({ error: error }),
    });
    // this.usergroup.reset();
  }
  onLogin() {
    this.router.navigate(['']);
  }
}
type UserProfile = {
  name: string;
  userName: string;
  userEmail: string;
  userRole: string;
  age: number;
  gender: string;
  phone: number;
  bearerToken: string;
};
