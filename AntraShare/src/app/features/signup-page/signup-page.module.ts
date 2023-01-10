import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup-component/signup.component';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupPageModule { }
