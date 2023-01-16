import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    // private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null),
    });
  }

  // ngOnInit(): void {
  //   this.loginForm = this.fb.group({
  //     username: '',
  //     password: ''
  //   })
  // }



  toNewsFeed() {
    this.router.navigate(['/news']);
  }

  onSubmit(){
    console.log(this.loginForm)
  }

}
