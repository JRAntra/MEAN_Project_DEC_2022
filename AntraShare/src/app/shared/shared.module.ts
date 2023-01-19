import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBannerComponent } from './router-banner/router-banner.component';
<<<<<<< HEAD
import { DisappearDirective } from './directive/disappear.directive';
=======
import { ShortenPipe } from './shorten-pipe/shorten.pipe';
import { HideAfterFiveSecDirective } from './hide-directive/hide-after-five-sec.directive';
>>>>>>> Release_Branch/BossHypnotizer


@NgModule({
  declarations: [
    RouterBannerComponent,
<<<<<<< HEAD
    DisappearDirective,

=======
    ShortenPipe,
    HideAfterFiveSecDirective,
>>>>>>> Release_Branch/BossHypnotizer
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterBannerComponent,
<<<<<<< HEAD
    DisappearDirective,

=======
    ShortenPipe,
    HideAfterFiveSecDirective,
>>>>>>> Release_Branch/BossHypnotizer
  ],
  bootstrap: [
    RouterBannerComponent
  ]
})
export class SharedModule { }
