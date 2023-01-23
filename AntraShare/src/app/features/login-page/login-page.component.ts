import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared/services/user-info.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({});
  // sessionUser:any;
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private userService: UserInfoService
  ) { }

  // ngOnInit() {
  //   this.loginForm = new FormGroup({
  //     'userEmail': new FormControl(null, Validators.required),
  //     'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //   });
  // }

  ngOnInit() {
    this.loginForm = this.fb.group({
      // username: [null, [Validators.required],[this.validateUsername]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

  toNewsFeed() {
    this.router.navigate(['/news']);
  }

  get invalidUsername(){
    return this.loginForm.get('username')?.hasError('validateUsername') && this.loginForm.get("username")?.dirty
  }

  // onSubmit(){
  //   console.log(this.loginForm)
  //   if(this.loginForm.invalid){
  //     return
  //   }
  //   // this.toNewsFeed();
  //   this.userService.login(this.loginForm.get('userEmail')?.value, this.loginForm.get('password')?.value)
  //     .subscribe(user => {
  //       this.sessionUser = user
  //       console.log(this.sessionUser)
  //       // this.toNewsFeed()
  //     })
  // }

  onSubmit(){
    console.log(this.loginForm);
    if(this.loginForm.invalid){
      console.log(this.loginForm.get("password")?.errors)
      return
    } else {
      this.toNewsFeed()
    }
  }

  validateUsername(control:AbstractControl){
    return this.userService.checkUserName(control.value)
      .subscribe(res => {
        if(res){
          return null
        } else {
          return {'username':"does not exist"}
        }
      })
  }



}
