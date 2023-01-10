import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page-component/admin-page.component';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminPageModule { }
