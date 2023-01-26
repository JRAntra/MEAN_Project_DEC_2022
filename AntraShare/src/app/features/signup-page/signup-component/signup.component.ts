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


  constructor(private registerService: RegisterService) { }

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
      userName: this.userName.value ? this.userName.value : '',
      userEmail: this.emailValue.value ? this.emailValue.value : '',
      password: this.passwordValue.value ? this.passwordValue.value : '',
    }

    this.registerService.postNewAccount(newAccount).subscribe(console.log);
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
  

//   set nameValue(val) {
//     this.signUpForm?.get('name')?.setValue(val)
//   }

  // get userName(): FormControl {
  //   return this.signUpForm.get('userName') as FormControl
  //   //type transform
  // }

//   set usernameValue(val) {
//     this.signUpForm?.get('userName')?.setValue(val)
// }
//   get usernameValue() {
//     return this.signUpForm?.get('userName')?.value
// }

// set emailValue(val) {
//   this.signUpForm?.get('email')?.setValue(val)
// }
// get emailValue() {
//     return this.signUpForm?.get('email')?.value
// }

// set passwordValue(val) {
//     this.signUpForm?.get('password')?.setValue(val)
// }
// get passwordValue() {
//     return this.signUpForm?.get('password')?.value
// }




// export class SignupComponent implements OnInit {
//   type: string = "password";
//   isText: boolean = false;
//   eyeIcon: string = "fa-eye-slash";
//   signUpForm!: FormGroup;
//   router: any;
//   constructor(private fb: FormBuilder, private registerService: RegisterService) { }

//   ngOnInit(): void {
//     this.signUpForm = this.fb.group ({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       userName: ['', Validators.required],
//       email: ['', Validators.required],
//       password: ['', Validators.required],
//       passwordConfirmation: ['', Validators.required]
//     })
//   }
//   // hideShowPass() {
//   //   this.isText = !this.isText;
//   //   this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
//   //   this.isText ? this.type = "text" : this.type = "password";
//   // }

//   onSignup() {
//     if(this.signUpForm.valid) {
//       //perform the logic for signup

//       // console.log(this.signUpForm.value);

//       const firstName = this.signUpForm.get('firstName')?.value;
//       const lastName = this.signUpForm.get('lastName')?.value;
//       const name = this.signUpForm.get('firstName')?.value + ' ' + this.signUpForm.get('lastName')?.value;
//       const userName = this.signUpForm.get('userName')?.value;
//       const userEmail = this.signUpForm.get('email')?.value;
//       const password = this.signUpForm.get('password')?.value;
//       this.signUpForm.patchValue({
//         name: name,
//         firstName: firstName,
//         lastName: lastName,
//         userName: userName,
//         userEmail: userEmail,
//         password: password
//       });
//       alert('congratulations!You already register an account!');
//       // this.router.navigate(['/login/']);

//     } else {
//       // this.validateAllFormFields(this.signUpForm);
//       //logic for throwing error
//     }

    
    
//   }
//   private validateAllFormFields(formGroup: FormGroup) {
//     Object.keys(formGroup.controls).forEach(field=>{
//       const control = formGroup.get(field);
//       if(control instanceof FormControl) {
//         control.markAsDirty({ onlySelf:true });
//       } else if(control instanceof FormGroup) {
//         this.validateAllFormFields(control)
//       }
//     })

//   }

// }
