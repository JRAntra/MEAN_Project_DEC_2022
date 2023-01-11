import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page-component/profile-page.component';
import { TopNavModule } from '../top-nav/top-nav.module';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    TopNavModule
  ],
  exports: [
    ProfilePageComponent
  ]
})
export class ProfilePageModule { }
