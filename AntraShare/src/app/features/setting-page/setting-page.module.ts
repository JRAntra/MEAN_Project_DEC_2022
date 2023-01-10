import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page-component/setting-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SettingPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    SettingPageComponent
  ]
})
export class SettingPageModule { }
