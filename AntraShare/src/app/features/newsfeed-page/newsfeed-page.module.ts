import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page-component/newsfeed-page.component';
import { TopNavModule } from '../top-nav/top-nav.module';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatInputModule} from '@angular/material/input';
import { LikeListModule } from '../like-list/like-list.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    NewsfeedPageComponent
  ],
  imports: [
    CommonModule,
    TopNavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    LikeListModule,
    MatGridListModule
  ],
  exports: [
    NewsfeedPageComponent
  ]
})
export class NewsfeedPageModule { 
}
