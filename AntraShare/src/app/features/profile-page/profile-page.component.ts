import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{

  profileForm : FormGroup = new FormGroup({});
  isHidden: String = "password";
  isDisabled: Boolean = true;

  constructor(private fb: FormBuilder){ }

  ngOnInit() {

    this.profileForm = this.fb.group({
      userName: 'John Doe',
      email: 'jdoe1@yahoo.com',
      age: '21',
      gender: 'Female',
      password: 'nowyouseemypassword',
      
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


}
