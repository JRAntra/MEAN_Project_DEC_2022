import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  form = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    passwordcon: new FormControl(),
    email: new FormControl(),
  });

  constructor(private router: Router) {}

  onSubmit() {
    console.log(this.form);
    console.log(
      this.form.get('userName')?.value,
      this.form.get('password')?.value,
      this.form.get('passwordcon')?.value,
      this.form.get('email')?.value
    );

    this.form.setValue({
      userName: '',
      password: '',
      passwordcon: '',
      email: '',
    });
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }
}
