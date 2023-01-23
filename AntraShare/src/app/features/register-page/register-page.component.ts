import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, first } from 'rxjs';
import { RegisterService } from 'src/app/core/service/register/register.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private formBuider: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.formBuider.group({
      userName: new FormControl('', {
        validators: [Validators.required, this.userNameExist()],
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          this.hasUpperAndLower,
          this.hasSpecial,
        ],
      }),
      passwordcon: new FormControl('', [Validators.required]),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          this.userEmailExist(),
        ],
      }),
    });
  }

  hasUpperAndLower(control: AbstractControl): ValidationErrors | null {
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    return hasUpper && hasLower ? null : { hasUpperAndLower: false };
  }

  hasSpecial(control: AbstractControl): ValidationErrors | null {
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);
    return hasSpecial ? null : { hasSpecial: hasSpecial };
  }

  // TODO: Can't get password value to compare with passwordcon
  // isPasswordMatched(control: AbstractControl): ValidationErrors | null {
  //   console.log(control.get('password')); // this will get null
  //   // const matched = this.form.get('password')?.value === control.value;
  //   const matched = true;
  //   return matched ? null : { match: false };
  // }

  userEmailExist() {
    return (control: AbstractControl) => {
      if (control.value.length !== 0) {
        this.registerService.checkEmailUsed(control.value).subscribe((val) => {
          console.log(val);
          if (val) control.setErrors({ exist: true });
        });
      }
      return null;
    };
  }

  userNameExist() {
    return (control: AbstractControl) => {
      if (control.value.length !== 0) {
        this.registerService
          .checkUserNameExist(control.value)
          .subscribe((val) => {
            if (val) control.setErrors({ exist: true });
          });
      }
      return null;
    };
  }

  onSubmit() {
    const registerData: user = {
      userName: this.form.get('userName')?.value,
      userEmail: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };

    this.registerService
      .register(registerData)
      .pipe(first())
      .subscribe((val) => {
        alert('Registration successful');
        console.log(val);
        this.goToLoginPage();
      });
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

type user = {
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  password: string | null | undefined;
};
