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
import { NewsFeedPipe } from './news-feed/news-feed.pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NewsFeedService } from './news-feed/news-feed.service';






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
    NewsFeedPipe,
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    
    
  ],
  providers:[NewsFeedService],
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
