import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsStoriesComponent } from './news-feed/news-stories/news-stories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: NewsFeedComponent}
]


@NgModule({
  declarations: [
    NewsFeedComponent,
    NewsStoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  // exports:[]
})
export class NewsFeedPageModule {
  constructor(){
    console.log("this is news feed")
  }
}
