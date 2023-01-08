import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    NewsFeedComponent,
    ProfilePageComponent,
    SettingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent,
    NewsFeedComponent,
    ProfilePageComponent,
    SettingPageComponent
  ]
})
export class FeaturesModule { }
