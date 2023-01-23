import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsernameService } from '../service/username.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit{
  genders: string[] = ['Male', 'Female', 'Prefer not to say'];
  hide = true;
  profileForm = new FormGroup({
    username: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required, this.oneUppercase, 
        this.oneSpecialChar]}),
    passwordConfirm: new FormControl('', {validators: [Validators.required, this.passwordsMatch]}),
    age: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(),
    gender: new FormControl()
  });
  constructor(private usernameService: UsernameService) { }
  ngOnInit(): void {
    this.profileForm
  }

  onSubmit(): void{
    const username = this.profileForm.get('username')?.value;
    const password = this.profileForm.get('password')?.value;
    const gender = this.profileForm.get('gender')?.value;
    const age = this.profileForm.get('age')?.value;
    const email = this.profileForm.get('email')?.value;
    const phone = this.profileForm.get('phone')?.value;

    console.log(password)
  }

  checkUsername(control: AbstractControl): Observable<ValidationErrors | null>{
    console.log("In chekc function", this.usernameService);
    return this.usernameService.checkExist(control.value).pipe(
      map(res => {
        console.log(res);
        if(res) {
          return { "usernameExists": "true"};
        } else {
          return null;
        }
    }))
  }

  oneUppercase(control: AbstractControl): ValidationErrors | null  {
    if (control.value !== control.value.toLowerCase()){
        return null;
    } else {
        return { "oneUppercase": "false" };
    }
  }

  oneSpecialChar(control: AbstractControl): ValidationErrors | null {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(control.value)){
        return null;
    } else {
        return { "oneSpecialChar": "false" };
    }
  }

  passwordsMatch(control: AbstractControl): ValidationErrors | null {
    var password = control.get('password')?.value;
    var passwordConfirmation = control.get('passwordConfirm')?.value;
    console.log('1', password)
    console.log('2', passwordConfirmation)
    if (password === passwordConfirmation) {
      console.log("matched")
      control.get('passwordConfirm')?.setErrors(null);
      return null;
    } else {
      console.log("not matched")
      control.get('passwordConfirm')?.setErrors({ passwordsMatch: false} );
      return { "passwordsMatch": "false" };
    }
  }

}
