import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/shared/services/user-info.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ["John Doe", Validators.required],
      password: ['nowyouseemypassword', [Validators.required, Validators.minLength(6)]],
      email: ['jdoe1@yahoo.com', Validators.required],
    })
  }

  get f(){return this.registerForm.controls}

  onSubmit(){
    this.submitted = true
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;
    const email = this.registerForm.get('email')?.value;
    this.registerForm.setValue({
      username: username,
      password: password,
      email: email,
    });

    // test data binding
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    // TODO: route to login page after the user completed registration

    this.userInfoService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(val => console.log(`Register form being sent: ${val}`))
  }

}
