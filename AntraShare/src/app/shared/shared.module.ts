import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBannerComponent } from './router-banner/router-banner.component';
import { DisappearDirective } from './directive/disappear.directive';


@NgModule({
  declarations: [
    RouterBannerComponent,
    DisappearDirective,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterBannerComponent,
    DisappearDirective,

  ],
  bootstrap: [
    RouterBannerComponent
  ]
})
export class SharedModule { }
