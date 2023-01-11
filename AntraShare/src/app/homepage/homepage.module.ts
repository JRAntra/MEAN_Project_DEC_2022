import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { RandomColorDirective } from '../directives/random-color.directive';



@NgModule({
  declarations: [
    HomepageComponent,
    RandomColorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomepageComponent]
})
export class HomepageModule { }
