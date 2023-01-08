import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';



@NgModule({
  declarations: [
    SettingPageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingPageComponent,
    AdminPageComponent
  ]
})
export class FeaturesModule { }
