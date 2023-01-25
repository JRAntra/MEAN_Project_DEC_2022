import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { LikeListComponent } from './like-list/like-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LikeListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
