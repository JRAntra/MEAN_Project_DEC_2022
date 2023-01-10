import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page-component/newsfeed-page.component';


@NgModule({
  declarations: [
    NewsfeedPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsfeedPageComponent
  ]
})
export class NewsfeedPageModule { }
