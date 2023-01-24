import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { concatMap, debounceTime, first, flatMap, fromEvent, map, mergeMap, Observable, switchMap } from 'rxjs';
import { UsernameProfilePageService } from './services/username-profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {

  constructor(private checkService: UsernameProfilePageService) { }

  usernameValidation = (control: AbstractControl): Observable<ValidationErrors | null> =>{
    return fromEvent(document.getElementById('username') as HTMLElement, 'keyup').pipe(
      debounceTime(850),
      mergeMap(() => this.checkService.checkUserName(control.value)),
      map(res => res ? {"userExist": "The exact username have already exists"} : null),
      first()
    )
  }

  form = new FormGroup({
    userName: new FormControl("", [Validators.required], [this.usernameValidation]),
    password: new FormControl("", [Validators.required, this.passwordValidation]),
    passConfirm: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email]),
  }, [this.passConfirmValidation]);

  passwordValidation(control: AbstractControl) {
    const val = control.value
    if (!/[A-Z]/.test(val)) return {"upper": "Password must have at least 1 uppercase character"}
    if (!/[a-z]/.test(val)) return {"lower": "Password must have at least 1 lowercase character"}
    if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val)) return {"special": "Password must have at least 1 special character"}
    return null
  }


  passConfirmValidation(control: AbstractControl) {
    var val = control.get("passConfirm")?.value
    var pass = control.get("password")?.value
    if (val === pass) return null
    else return {"mismatch": "password and confirm doesn't match"}
  }


  onSubmit() {
    const userName = this.form.get('userName')!.value;
    const password = this.form.get('password')!.value;
    const email = this.form.get('email')!.value;
    console.log(this.form);
    this.form.setValue({
      userName: userName,
      password: password,
      passConfirm: password,
      email: email,
    });
  }
}
