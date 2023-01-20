import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavBarComponent]
})
export class NavBarModule { }
