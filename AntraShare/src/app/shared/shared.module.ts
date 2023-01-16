import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBannerComponent } from './router-banner/router-banner.component';
import { ShortenPipe } from './shorten-pipe/shorten.pipe';


@NgModule({
  declarations: [
    RouterBannerComponent,
    ShortenPipe,
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
