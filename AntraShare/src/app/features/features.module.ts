import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SharedModule } from '../shared/shared.module';
import { NewsStoriesComponent } from './news-feed/news-stories/news-stories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { First20CharsPipe } from '../pipes/first20-chars.pipe';

@NgModule({
  declarations: [
    NewsFeedComponent,
    ProfilePageComponent,
    AdminPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SettingPageComponent,
    NewsStoriesComponent,
    First20CharsPipe,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
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
