import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBannerComponent } from './router-banner/router-banner.component';
import { HideAfterFiveSecDirective } from './hide-after-five-sec/hide-after-five-sec.directive';


@NgModule({
  declarations: [
    RouterBannerComponent,
    HideAfterFiveSecDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterBannerComponent,
    HideAfterFiveSecDirective
  ],
  bootstrap: [
    RouterBannerComponent
  ]
})
export class SharedModule { }
