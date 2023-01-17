import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{
  genders: string[] = ['Male', 'Female', 'Prefer not to say'];
  profileForm: FormGroup;
  constructor() {
    this.profileForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      gender: new FormControl()
    });
  }
  ngOnInit(): void {
  }
  onSubmit(): void{
    const username = this.profileForm.get('username')?.value;
    const password = this.profileForm.get('password')?.value;
    const gender = this.profileForm.get('gender')?.value;
    const age = this.profileForm.get('age')?.value;
    const email = this.profileForm.get('email')?.value;
    const phone = this.profileForm.get('phone')?.value;

    this.profileForm.setValue({
      username: username,
      password: password,
      gender: gender,
      age: age,
      email: email,
      phone: phone
    })
    console.log(this.profileForm.value);
  }
}
