import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsFeedComponent,
    ProfilePageComponent,
    AdminPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SettingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NewsFeedComponent,
    ProfilePageComponent,
    AdminPageComponent,
    RegisterPageComponent,
    SettingPageComponent,
    LoginPageComponent
  ]
})
export class FeaturesModule { }
