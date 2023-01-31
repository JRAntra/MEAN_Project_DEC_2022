import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsStoriesComponent } from './news-feed/news-stories/news-stories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeListComponent } from './news-feed/like-list/like-list.component';



@NgModule({
  declarations: [
    NewsFeedComponent,
    NewsStoriesComponent,
    LikeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    NewsFeedComponent,
    NewsStoriesComponent,
    LikeListComponent
  ]
})
export class NewsFeedPageModule { }
