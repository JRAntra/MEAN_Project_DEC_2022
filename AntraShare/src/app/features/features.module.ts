import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SettingPageComponent,
    AdminPageComponent,
    NewsfeedPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    SettingPageComponent,
    AdminPageComponent,
    NewsfeedPageComponent,
    ProfilePageComponent
  ]
})
export class FeaturesModule { }
