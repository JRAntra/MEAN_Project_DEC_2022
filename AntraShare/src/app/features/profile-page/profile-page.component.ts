import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsernameProfilePageService } from './services/username-profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {

  constructor(private checkService: UsernameProfilePageService) { }

  usernameValidation = (control: AbstractControl): Observable<ValidationErrors | null> =>{
      return this.checkService.checkUserName(control.value).pipe(
      map(res => {
        if (res) return {"userExist": "The exact username have already exists"}
        else return null
      })
    )}

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

  show() {
    console.log(this.checkService.checkUserName("CallbackCats") );

    console.log(this.form.get("userName")?.errors);
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
