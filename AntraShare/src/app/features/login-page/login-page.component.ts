import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  usergroup: FormGroup = new FormGroup({});

  agree_or_not: FormGroup = new FormGroup({
    agreecheckbox: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private router: Router) {
    this.usergroup = fb.group({
      username: '',
      password: '',
      agreecheckbox: '',
    });
  }

  ngOnInit(): void {
    //console.log( this.agree_or_not)
  }
  get user() {
    return this.usergroup.controls;
  }
  get agree() {
    return this.agree_or_not.controls;
  }

  onSubmit(): void {
    console.log(this.usergroup.value);
    this.usergroup.reset();
  }

  onLogin() {
    this.router.navigate(['']);
  }
}
