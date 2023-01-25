import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required,
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    })
  })

  constructor(private loginService: LoginService) {}

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.loginForm. value)
  }

  set usernameValue(val) {
    this.loginForm?.get('username')?.setValue(val)
}

get usernameValue() {
    return this.loginForm?.get('username')?.value
}

set passwordValue(val) {
    this.loginForm?.get('password')?.setValue(val)
}

get passwordValue() {
    return this.loginForm?.get('password')?.value
}
}


//   type: string = "password";
//   isText: boolean = false;
//   eyeIcon: string = "fa-eye-slash";
//   loginForm!: FormGroup;
//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.loginForm = this.fb.group ({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     })
//   }

//   hideShowPass() {
//     this.isText = !this.isText;
//     this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
//     this.isText ? this.type = "text" : this.type = "password";
//   }

//   onSubmit() {
//     if(this.loginForm.valid) {
//       console.log(this.loginForm.value)
//       //send the obj to database
//     } else {
//       //throw the error using toaster and with required fields
//       this.validateAllFormFields(this.loginForm);
//       alert("Your form is invalid")
//     }
//   }

//   private validateAllFormFields(formGroup: FormGroup) {
//     // Object.keys(formGroup.controls).forEach(field=>{
//     //   const control = formGroup.get(field);
//     //   if(control instanceof FormControl) {
//     //     control.markAsDirty({ onlySelf:true });
//     //   } else if(control instanceof FormGroup) {
//     //     this.validateAllFormFields(control)
//     //   }
//     // })
//     console.log(formGroup.controls)
//     for(let control in formGroup.controls) {
//       //remove for loop
//       // markAllAsTouched()
//       // updateValueAndValidity
//     }

//   }

// }
