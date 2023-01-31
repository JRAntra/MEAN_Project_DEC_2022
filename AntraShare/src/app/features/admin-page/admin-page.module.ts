import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:AdminPageComponent}
]

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports: [AdminPageComponent]
})
export class AdminPageModule {
  constructor(){
    console.log('this is admin page')
  }  
}
