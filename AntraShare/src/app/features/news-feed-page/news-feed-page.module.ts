import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsStoriesComponent } from './news-feed/news-stories/news-stories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeListComponent } from './news-feed/like-list/like-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: NewsFeedComponent}
]


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
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    NewsFeedComponent,
    NewsStoriesComponent,
    LikeListComponent
  ]
})
export class NewsFeedPageModule {
  constructor(){
    console.log("this is news feed")
  }
}
