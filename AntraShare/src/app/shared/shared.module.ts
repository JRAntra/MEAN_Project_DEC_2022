import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { DirectivesDirective } from './directives/directives.directive';
import{PopupserviceService} from './services/popupservice.service'
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavBarComponent,
    DirectivesDirective,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[PopupserviceService],
  exports: [
    NavBarComponent,
    DirectivesDirective,
    
  ],
  bootstrap: [
    NavBarComponent
  ]
})
export class SharedModule { }
