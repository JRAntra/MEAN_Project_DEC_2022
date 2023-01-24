import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeListComponent } from './like-list/like-list.component';



@NgModule({
  declarations: [
    LikeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LikeListComponent
  ]
})
export class LikeListModule { }
