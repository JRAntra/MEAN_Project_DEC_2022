import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService  } from 'app/core/services/register/register.service';
import { User } from 'app/shared/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  router: any;
  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup() {
    if(this.signUpForm.valid) {
      //perform the logic for signup

      // console.log(this.signUpForm.value);

      const firstName = this.signUpForm.get('firstName')?.value;
      const lastName = this.signUpForm.get('lastName')?.value;
      const name = this.signUpForm.get('firstName')?.value + ' ' + this.signUpForm.get('lastName')?.value;
      const userName = this.signUpForm.get('userName')?.value;
      const userEmail = this.signUpForm.get('email')?.value;
      const password = this.signUpForm.get('password')?.value;
      this.signUpForm.patchValue({
        name: name,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        userEmail: userEmail,
        password: password
      });
      alert('congratulations!You already register an account!');
      // this.router.navigate(['/login/']);

    } else {
      // this.validateAllFormFields(this.signUpForm);
      //logic for throwing error
    }

    
    
  }
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl) {
        control.markAsDirty({ onlySelf:true });
      } else if(control instanceof FormGroup) {
        this.validateAllFormFields(control)
      }
    })

  }

}
