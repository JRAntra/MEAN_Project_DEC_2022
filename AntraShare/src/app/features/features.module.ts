import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    NewsFeedComponent,
    ProfilePageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class FeaturesModule { }
