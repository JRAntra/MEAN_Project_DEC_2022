import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    SettingPageComponent,
    AdminPageComponent,
    NewsfeedPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingPageComponent,
    AdminPageComponent,
    NewsfeedPageComponent,
    ProfilePageComponent
  ]
})
export class FeaturesModule { }
