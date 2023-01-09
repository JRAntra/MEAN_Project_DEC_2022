import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    NewsFeedComponent,
    ProfilePageComponent,
    AdminPageComponent,
    SettingPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsFeedComponent,
    ProfilePageComponent,
    AdminPageComponent,
    SettingPageComponent,
    LoginPageComponent
  ]
})
export class FeaturesModule { }
