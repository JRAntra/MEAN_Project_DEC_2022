import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsernameService } from '../service/username.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit{
  genders: string[] = ['Male', 'Female', 'Prefer not to say'];
  hide = true;
  profileForm: FormGroup = new FormGroup({});
  passwordConfirm = new FormControl();

  constructor(private fb: FormBuilder, private usernameService: UsernameService) { }
  
  ngOnInit(): void {
    this.profileForm = this.fb.group({
        username: ['', [Validators.required, this.checkUsername()]],
        password: ['', [Validators.required, this.oneUppercase, 
            this.oneSpecialChar, this.passwordsMatch(this.passwordConfirm)]],
        age: [''],
        email: [' ', [Validators.required, Validators.email]],
        phone: [''],
        gender: [''],
      });
      // this.passwordConfirm = ['',[this.passwordsValidator]];
  }

  onSubmit(): void{
    // validate fields before submission
    // check for error list
    const username = this.profileForm.get('username')?.value;
    const password = this.profileForm.get('password')?.value;
    const gender = this.profileForm.get('gender')?.value;
    const age = this.profileForm.get('age')?.value;
    const email = this.profileForm.get('email')?.value;
    const phone = this.profileForm.get('phone')?.value;

    this.profileForm.setValue({
      userName: username,
      password: password,
      gender: gender,
      age: age,
      userEmail: email,
      phone: phone
    });
  }
  
  checkUsername(){
      return (control: AbstractControl) => {
        this.usernameService.checkExist(control.value).subscribe(
          ans => {
            if (ans) {
              control.setErrors({'usernameExists': true})
            }
          })
      }
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
  // 'this' is undefined
  // When apply validator function as a validator, this refers to outside wrapper of the form control
  // No the class itself -- user arrow function
  passwordsMatch(match: FormControl){
    return (control: AbstractControl) => {
      const password = control.value;
      const passwordConfirm = match.value;
      if (password !== passwordConfirm){
        match.setErrors({'passwordsDoNotMatch': true})
      }
    }
  }
  // 
  // passwordsValidator(): AsyncValidatorFn{
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     const password = control.value;
  //     const passwordConfirm = match.value;
  //     if (password !== passwordConfirm){
  //       match.setErrors({'passwordsDoNotMatch': true})
  //     }
  //   }
  // }
}
