import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page-component/newsfeed-page.component';
import { TopNavModule } from '../top-nav/top-nav.module';

@NgModule({
  declarations: [
    NewsfeedPageComponent
  ],
  imports: [
    CommonModule,
    TopNavModule
  ],
  exports: [
    NewsfeedPageComponent
  ]
})
export class NewsfeedPageModule { }
