import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsStoriesComponent } from './news-feed/news-stories/news-stories.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NewsFeedComponent,
    NewsStoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    NewsFeedComponent,
    NewsStoriesComponent
  ]
})
export class NewsFeedPageModule { }
