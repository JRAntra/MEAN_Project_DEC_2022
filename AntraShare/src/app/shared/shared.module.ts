import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBannerComponent } from './router-banner/router-banner.component';
import { ShortenPipe } from './shorten-pipe/shorten.pipe';
import { HideAfterFiveSecDirective } from './hide-directive/hide-after-five-sec.directive';


@NgModule({
  declarations: [
    RouterBannerComponent,
    ShortenPipe,
    HideAfterFiveSecDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterBannerComponent,
    ShortenPipe,
    HideAfterFiveSecDirective,
  ],
  bootstrap: [
    RouterBannerComponent
  ]
})
export class SharedModule { }
