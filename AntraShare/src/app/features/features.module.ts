import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './login-page/login-page.module';
import { SignupPageModule } from './signup-page/signup-page.module';
import { SettingPageModule } from './setting-page/setting-page.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { NewsfeedPageModule } from './newsfeed-page/newsfeed-page.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { ContentCardModule } from './content-card/content-card.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginPageModule,
    SignupPageModule,
    NewsfeedPageModule,
    ProfilePageModule,
    AdminPageModule,
    SettingPageModule,
    ContentCardModule
  ],
  exports: [
    SettingPageModule,
    AdminPageModule,
    LoginPageModule,
    SignupPageModule,
    NewsfeedPageModule,
    ProfilePageModule
  ]
})
export class FeaturesModule { }
