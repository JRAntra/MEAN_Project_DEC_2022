import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/core/service/register/register.service';
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
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}
  onSubmit() {
    const registerData: user = {
      userName: this.form.get('userName')?.value,
      userEmail: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
    this.subscription = this.registerService.register(registerData).subscribe(
      (response) => {
        console.log(response);
        this.goToLoginPage();
      },
      (error) => {
        console.log(error);
      }
    );
    // this.form.setValue({
    //   userName: '',
    //   password: '',
    //   passwordcon: '',
    //   email: '',
    // });
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

type user = {
  userName: string;
  userEmail: string;
  password: string;
};
