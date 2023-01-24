import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map, debounceTime, Observable, Subject } from 'rxjs';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  agree_or_not: FormGroup = new FormGroup({
    agreecheckbox: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', { validators: [this.validateUserExist()] }),
      password: new FormControl('', {
        validators: [Validators.minLength(8)],
      }),
      agreecheckbox: '',
    });
  }

  validateUserExist() {
    return (control: AbstractControl) => {
      if (control?.value.length !== 0) {
        this.loginService
          .checkUserExist(control.value)
          ?.pipe(
            debounceTime(2000),
            map((res) => {
              if (!res) control.setErrors({ nonexist: true });
              console.log(res);
            })
          )
          .subscribe();
      }
      return null;
    };
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    // this.usergroup.reset();
  }

  onLogin() {
    this.router.navigate(['']);
  }
}
