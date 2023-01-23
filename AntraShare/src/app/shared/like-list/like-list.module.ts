import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeListComponent } from './like-list.component';
import { LikeListDirective } from '../directives/like-list.directive';



@NgModule({
  declarations: [
    LikeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LikeListModule { }
