import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    })
  }

  toNewsFeed() {
    this.router.navigate(['/news']);
  }

  onSubmit(){
    
  }

}
