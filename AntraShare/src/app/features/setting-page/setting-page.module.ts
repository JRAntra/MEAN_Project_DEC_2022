import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page-component/setting-page.component';
import { MatButtonModule } from '@angular/material/button';
import { TopNavModule } from '../top-nav/top-nav.module';

@NgModule({
  declarations: [
    SettingPageComponent
  ],
  imports: [
    CommonModule,
    TopNavModule,
    MatButtonModule
  ],
  exports: [
    SettingPageComponent
  ]
})
export class SettingPageModule { }
