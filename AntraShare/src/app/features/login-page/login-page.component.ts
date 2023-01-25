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
        control.valueChanges
          ?.pipe(
            debounceTime(500),
            switchMap((username) => this.loginService.checkUserExist(username)),
            take(1) // it runs.complete function after emit the first value(unsubscribe itself)
          )
          .subscribe((exist) => {
            if (!exist) control.setErrors({ nonexist: true });
            console.log(exist);
          });
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
