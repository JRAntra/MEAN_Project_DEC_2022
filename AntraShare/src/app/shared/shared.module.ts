import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { DirectivesDirective } from './directives/directives.directive';
import{PopupserviceService} from './services/popupservice.service'
import { RouterModule } from '@angular/router';
import { LikeListComponent } from './like-list/like-list.component';
import { LikeListDirective } from './directives/like-list.directive';




@NgModule({
  declarations: [
    NavBarComponent,
    DirectivesDirective,
    LikeListComponent,
    LikeListDirective,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[PopupserviceService],
  exports: [
    NavBarComponent,
    DirectivesDirective,
    LikeListComponent,
    LikeListDirective
    
  ],
  bootstrap: [
    NavBarComponent
  ]
})
export class SharedModule { }
