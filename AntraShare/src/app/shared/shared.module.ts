import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBannerComponent } from './router-banner/router-banner.component';


@NgModule({
  declarations: [
    RouterBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterBannerComponent,
  ],
  bootstrap: [
    RouterBannerComponent
  ]
})
export class SharedModule { }
