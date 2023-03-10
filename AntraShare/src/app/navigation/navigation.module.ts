import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"bar", component: NavigationBarComponent},
    ])
  ],
  exports:[
    NavigationBarComponent
  ]
})
export class NavigationModule { }
