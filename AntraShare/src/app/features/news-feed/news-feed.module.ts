import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{NewsFeedComponent} from './news-feed.component'
import { DirectivesDirective } from 'src/app/shared/directives/directives.directive';

import { NewsFeedPipe } from './news-feed.pipe';




@NgModule({
  declarations: [
    NewsFeedComponent,
    DirectivesDirective,
    NewsFeedPipe,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[NewsFeedComponent]
})
export class NewsFeedModule { }