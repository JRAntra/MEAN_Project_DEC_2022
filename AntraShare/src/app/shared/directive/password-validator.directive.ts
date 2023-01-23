import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: 
    PasswordValidatorDirective, multi: true}]
})
export class PasswordValidatorDirective implements Validator {
  @Input('appPasswordName') passwordName = '';

  constructor() { }

  PasswordNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {
        forbiddenName: {value: control.value}} : null;
    };
  }


  validate(control: AbstractControl): ValidationErrors | null {
    return this.passwordName? 
    this.PasswordNameValidator(
      new RegExp(this.passwordName, 'i'))(control)
      :null;
  }

  
}
