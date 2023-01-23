import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page-component/profile-page.component';
import { TopNavModule } from '../top-nav/top-nav.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentCardModule } from '../content-card/content-card.module';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    TopNavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    ContentCardModule
  ],
  exports: [ProfilePageComponent],
})
export class ProfilePageModule {}
