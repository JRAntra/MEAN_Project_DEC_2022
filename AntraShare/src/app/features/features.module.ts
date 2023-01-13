import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { NewPostComponent } from './news-feed/new-post/new-post.component';
import { StoryComponent } from './news-feed/story/story.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FadeOutDirective } from '../directive/fadeout.directive';
import { TruncatePipe } from '../pipe/truncate.pipe';

@NgModule({
  declarations: [
    LoginPageComponent,
    NewsFeedComponent,
    ProfilePageComponent,
    SettingPageComponent,
    NewPostComponent,
    StoryComponent,
    RegisterPageComponent,
    AdminPageComponent,
    FadeOutDirective,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    LoginPageComponent,
    NewsFeedComponent,
    ProfilePageComponent,
    SettingPageComponent,
    RegisterPageComponent,
    AdminPageComponent,
  ],
})
export class FeaturesModule {}
