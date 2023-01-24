import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LikeListComponent } from './components/like-list/like-list.component';
import { CharacterLimitPipePipe } from './components/like-list/character-limit-pipe.pipe';

@NgModule({
  declarations: [NavBarComponent, ButtonComponent, LikeListComponent, CharacterLimitPipePipe],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, ButtonComponent, LikeListComponent],
  bootstrap: [NavBarComponent],
})
export class SharedModule {}
