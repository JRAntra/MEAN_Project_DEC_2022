import { Component, OnInit } from '@angular/core';

import{FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { PopupserviceService } from 'src/app/shared/services/popupservice.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  usergroup:FormGroup;
  name:string='';
  constructor(private fb:FormBuilder,private appservice:PopupserviceService){
    

    this.usergroup=this.fb.group(
      {
        username:'',
        password:'',
        agree_or_not:this.fb.group({agreecheckbox:''})
      }
    )

    
   }

  ngOnInit(): void {
    //console.log(this.usergroup)
    console.log(this.name)

    
    
  }
  get user(){
    return this.usergroup.controls
  }
  
  
  onSubmit():void{
    //console.log(this.user['username']?.value)
    this.appservice.upDateState(this.user['username']?.value)
    this.usergroup.reset();
    console.log(this.appservice.currentPopUpService)

  }
  

}
