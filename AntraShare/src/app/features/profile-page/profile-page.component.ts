import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  form = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
  });

  onSubmit() {
    const userName = this.form.get('userName')?.value;
    const password = this.form.get('password')?.value;
    const email = this.form.get('email')?.value;
    console.log(this.form);
    this.form.setValue({
      userName: userName,
      password: password,
      email: email,
    });
  }
}
