import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBannerComponent } from './router-banner/router-banner.component';
import { First20CharsPipe } from './pipes/first20-chars.pipe';
import { AutoHideDirective } from './directives/auto-hide.directive';


@NgModule({
  declarations: [
    RouterBannerComponent,
    First20CharsPipe,
    AutoHideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterBannerComponent,
    AutoHideDirective,
    First20CharsPipe
  ],
  bootstrap: [
    RouterBannerComponent
  ]
})
export class SharedModule { }
