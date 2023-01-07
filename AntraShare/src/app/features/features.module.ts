import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';



@NgModule({
  declarations: [
    NewsFeedComponent,
    ProfilePageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
