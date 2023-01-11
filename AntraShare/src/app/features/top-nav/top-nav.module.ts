import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../../app-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [TopNavBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    TopNavBarComponent
  ]
})
export class TopNavModule {}
