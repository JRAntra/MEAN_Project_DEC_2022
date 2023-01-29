import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidatorDirective } from 'src/app/shared/directive/password-validator.directive';
import { User } from 'src/app/shared/models/user';
import { ProfilePageService } from './profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{

  profileForm : FormGroup = new FormGroup({});
  isHidden: String = "password";
  isDisabled: Boolean = true;
  name = localStorage.getItem('userName');
  userEmail = localStorage.getItem('userEmail');

  constructor(
    private fb: FormBuilder,
    private profileService: ProfilePageService,
  ){ }

  

  ngOnInit() {

    this.profileForm = this.fb.group({
      userName: this.name,
      email: [this.userEmail,{
        validators: [
          Validators.required,
          Validators.email
        ],
        updateOn: 'blur'
      }],
      age: '21',
      gender: 'Female',
      password: ['',
    [
      Validators.required, 
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      
      
    ]],
      
    });
  
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  onEdit() {
    if (this.isDisabled){
      this.isDisabled = false;
    }
    else {
      this.isDisabled = true;
    }
  }

  onReveal() {
    if (this.isHidden == "password")
    this.isHidden = "text";
    else {
      this.isHidden = "password"
    }
  }
  get userName(): FormControl{
    return this.profileForm.get('userName') as FormControl
  }


  getUser(username: string){
    return this.profileService.getUserProfile(username)
    .subscribe(result=>{
      console.log(result);
      
    })
  }
}
