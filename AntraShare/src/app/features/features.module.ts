import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LikeListBarComponent } from './news-feed/like-list-bar/like-list-bar.component';
import { NewPostComponent } from './news-feed/new-post/new-post.component';
import { StoryComponent } from './news-feed/story/story.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    LoginPageComponent,
    ProfilePageComponent,
    SettingPageComponent,
    RegisterPageComponent,
    LikeListBarComponent,
    NewPostComponent,
    StoryComponent
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
