import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page-component/setting-page.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    SettingPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports: [
    SettingPageComponent
  ]
})
export class SettingPageModule { }
