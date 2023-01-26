import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({});
  sessionUser:any;
  submitted:boolean = false;
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.submitted = false
    this.loginForm = this.fb.group({
      userEmail: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  toNewsFeed() {
    this.router.navigate(['/news']);
  }


  onSubmit(){
    this.submitted = true
    if(this.loginForm.invalid){
      return
    }
    // this.toNewsFeed();
    this.loginService.login(this.loginForm.get('userEmail')?.value, this.loginForm.get('password')?.value)
      .subscribe(user => {
        if(user){
          this.sessionUser = user
          this.toNewsFeed()
        } else {
          return
        }
      })
  }




}
