import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsFeedPageModule } from './news-feed-page/news-feed-page.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { RegisterPageModule } from './register-page/register-page.module';
import { SettingPageModule } from './setting-page/setting-page.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NewsFeedPageModule,
    AdminPageModule,
    LoginPageModule,
    ProfilePageModule,
    RegisterPageModule,
    SettingPageModule
  ],
  exports: [
  ]
})
export class FeaturesModule { }
