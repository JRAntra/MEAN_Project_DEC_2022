import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: "vilavivida",
      password: '12345',
      email: 'vilavivida@gmail.com',
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
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

}
