import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [NavBarComponent, ButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, ButtonComponent],
  bootstrap: [NavBarComponent],
})
export class SharedModule {}
