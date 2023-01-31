import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: SettingPageComponent }
]

@NgModule({
  declarations: [SettingPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  // exports:[SettingPageComponent]
})
export class SettingPageModule {
  constructor(){
    console.log('this is setting page')
  }
}
