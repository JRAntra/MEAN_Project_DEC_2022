import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';



@NgModule({
  declarations: [
    NewsFeedComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
