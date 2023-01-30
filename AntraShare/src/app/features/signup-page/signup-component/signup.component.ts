import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegisterService  } from 'app/core/services/register/register.service';
import { User } from 'app/shared/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  newAccount!: User;

  public signUpForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
      ]
    }),
    lastName: new FormControl('', {
      validators: [
        Validators.required,
      ]
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        this.registerService.availableEmail
      ]
    }),
    userName: new FormControl('', {
      validators: [
        Validators.required,
        this.registerService.availableUsername
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        this.upperCase,
        this.specialChar
      ]
    }),
    passwordConfirmation: new FormControl('', {
      validators: [
        Validators.required,
      ]
    }), 

  }, {
    validators: [
      this.passwordsMatch,
    ]
  })


  constructor(
    private router: Router,
    private registerService: RegisterService
    ) { }

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

  passwordsMatch(control: AbstractControl): ValidationErrors | null {
    var password = control.get('password')?.value;
    var passwordConfirmation = control.get('passwordConfirmation')?.value;
    if (password === passwordConfirmation) {
      control.get('passwordConfirmation')?.setErrors(null);
      return null;
    } else {
      control.get('passwordConfirmation')?.setErrors({ passwordsMatch: false});
      return { passwordsMatch: false};
    }
  }
  onSignup() {
    var name = this.signUpForm.get('firstName')?.value + ' ' + this.signUpForm.get('lastName')?.value;

    var newAccount: User = {
      name: name,
      userRole: 'user',
      userName: this.userName.value ? this.userName.value : '',
      userEmail: this.emailValue.value ? this.emailValue.value : '',
      password: this.passwordValue.value ? this.passwordValue.value : '',
    }

    this.registerService.postNewAccount(newAccount).subscribe(console.log);
    this.router.navigate(['/login/']);
  }
  get userName(): FormControl {
    return this.signUpForm.get('userName') as FormControl
    //type transform
  }
  get emailValue() {
    return this.signUpForm?.get('email') as FormControl
  }
  get passwordValue() {
    return this.signUpForm?.get('password') as FormControl
}
}
  
