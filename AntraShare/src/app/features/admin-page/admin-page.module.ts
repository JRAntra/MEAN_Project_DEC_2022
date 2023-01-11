import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page-component/admin-page.component';
import { MatButtonModule } from '@angular/material/button';
import { TopNavModule } from '../top-nav/top-nav.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    TopNavModule,
  ],
  exports: [AdminPageComponent],
})
export class AdminPageModule {}
