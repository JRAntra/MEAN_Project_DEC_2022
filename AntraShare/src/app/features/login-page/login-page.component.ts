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
  hasError:boolean = false;
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.hasError = false
    this.loginForm = this.fb.group({
      userEmail: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  toNewsFeed() {
    this.router.navigate(['/news']);
  }


  onSubmit(){
    
    if(this.loginForm.invalid){
      return
    }
    // this.toNewsFeed();
    this.loginService.login(this.loginForm.get('userEmail')?.value, this.loginForm.get('password')?.value)
      .subscribe(user => {
        if(user){
          this.sessionUser = user
          // console.log(user);
          localStorage.setItem('role', this.sessionUser.userRole);
          localStorage.setItem('userName', this.sessionUser.userName);
          localStorage.setItem('userEmail', this.sessionUser.userEmail);
          this.toNewsFeed()
        } else {
          this.hasError = true
          return
        }
      })
  }




}
