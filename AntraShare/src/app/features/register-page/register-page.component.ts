import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { RegisterService } from './register-service/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  form:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder, private registerservice:RegisterService){
    this.form=this.fb.group({
      userName:['',[Validators.required],[this.usernameValidator()]],
      password:['',[Validators.required,this.passwordValidator]],
      passwordcon:['',[Validators.required]],
      email:['',[Validators.required],[this.emailValidator()]]
    },[this.passwordconValidator])
  }
  errors(){
    // console.log(this.form.controls['userName'].errors)
  }
  errors1(){
    // console.log(this.form.controls['email'].errors)
  }
  errors2(){
    // console.log(this.form.controls['password'].errors)
  }
  error3(){
    // console.log(this.form.errors)
  }
  usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.registerservice.checkRegisterName(control.value).pipe(
        map(res => {
          
          return res ? { usernameExists: true } : null;
          
        })
      );
    };
  }

  // emailValidator(control:AbstractControl):Observable<ValidationErrors | null>{
    
  //   return this.registerservice.checkRegisterEmail(control.value).pipe(map(res=>{
  //     return res?{emailExits:true}:null;
  //   }))

  // }
  emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.registerservice.checkRegisterEmail(control.value).pipe(
        map(res => {
          
          return res ? { emailExists: true } : null;
          
        })
      );
    };
  }

  passwordValidator(control:AbstractControl){
    let hasUpper = /[A-Z]/.test(control.value);
    let hasLower = /[a-z]/.test(control.value);
    let hasspecial=/[$@$!%*#?&]/.test(control.value);
    const valid = hasLower && hasUpper&& hasspecial;
    if(!valid){
      return {'error':true}
    }
    else return null


  }

  passwordconValidator(control:AbstractControl): ValidationErrors | null{
    return control.get('password') && control.get('passwordcon')&& control.get('password')?.value!==control.get('passwordcon')?.value?{ notSame: true }:null ;

  }
  // MatchValidator(source: string, target: string): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const sourceCtrl = control.get(source);
  //     const targetCtrl = control.get(target);

  //     return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
  //       ? { mismatch: true }
  //       : null;
  //   };
  // }

  

    


  onSubmit() {
    // console.log(this.form);
    // console.log(this.form.get('userName')?.value)
    console.log(this.form.get('password')?.value)
    // this.form.get('passwordcon')?.value, 
    // this.form.get('email')?.value;
    // this.form.setValue({userName: "", password: "", passwordcon: "", email: ""});  
    
  }
}
