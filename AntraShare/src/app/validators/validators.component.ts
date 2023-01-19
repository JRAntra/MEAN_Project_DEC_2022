import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  userInput: FormControl = new FormControl('', 
  [Validators.required, this.myValidatorFn,this.myValidatorFn2],
  [this.myAsyncValidatorFn]);

  ngOnInit(): void {
    // const fg = this.fb.group(
    //   {
    //     username: ["", [Validators.required, Validators.min(20)]]
    //   }
    // )

  }
  validateError(){
    console.log(this.userInput.errors)
  }

  myValidatorFn(control: AbstractControl) {
    if (control.value.length > 10) {
      return { 'maxLength': 'the lengt of the input is too large' }
    } else return null
  }

  myValidatorFn2(control: AbstractControl) {
    if (control.value.length > 12) {
      return { 'maxLengthOver12': 'the lengt of the input is too too large' }
    } else return null
  }


  myAsyncValidatorFn(control: AbstractControl):Observable<ValidationErrors|null> {

    const obs = of(true) // come back from server
    // obs.subscribe(
    //   res=>{
    //     if(res){
    //       return {"minLength": "10"}
    //     }else return null
    //   }
    // )

    return obs.pipe(
      map(res=>{
        if(res){
          return {"async": "always return errors"}
        }else{
          return null 
        }
      })
    )

  }

}
