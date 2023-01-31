import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { CanActivateAdminGuard } from './guard/can-activate-admin.guard';
const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [CanActivateAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
