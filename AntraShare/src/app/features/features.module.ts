import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';




@NgModule({
  declarations: [
    LoginPageComponent,
    ProfilePageComponent,
    SettingPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent,
    ProfilePageComponent,
    SettingPageComponent,
    RegisterPageComponent
  ]
})
export class FeaturesModule { }
