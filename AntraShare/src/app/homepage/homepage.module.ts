import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { RandomColorDirective } from '../directives/random-color.directive';
import { First10CharsPipe } from '../pipes/first10-chars.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomepageComponent,
    RandomColorDirective,
    First10CharsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[HomepageComponent]
})
export class HomepageModule { }
