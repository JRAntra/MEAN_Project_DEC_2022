import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeListComponent } from './like-list/like-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LikeListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    LikeListComponent
  ]
})
export class LikeListModule { }
