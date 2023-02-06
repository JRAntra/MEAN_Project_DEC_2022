import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { CanUserVisitGuard } from './guard/can-user-visit.guard';
import { CanUserLeaveGuard } from './guard/can-user-leave.guard';
import { CanLoadCoreFeatureGuard } from './guard/can-load-core-feature.guard';
import { LoadDataResolver } from './guard/resolver/load-data.resolver';
import { ParentComComponent } from './contentProjection/parent-com/parent-com.component';
const routes: Routes = [
  { path: '', component: HomepageComponent, outlet:'primary', canDeactivate: [CanUserLeaveGuard] },
  { path: 'login', component: LoginPageComponent,
  canActivate : [CanUserVisitGuard], 
  data:{name:"JR"}, 
  canLoad: [CanLoadCoreFeatureGuard], 
  resolve:[LoadDataResolver]
},
  {
    path: 'nav',
    loadChildren: () => import('./navigation/navigation.module').then(m => { 
      return m.NavigationModule}),
    canLoad: [CanLoadCoreFeatureGuard]
  },
  { path: 'inventory/:id/asd', component: InventoryComponent},
  //localhost:4200/login
  // path parameter -- required as part of the path
  // query parameter -- optional

  {path:"inventory", pathMatch:"prefix", component:InventoryComponent},
  {path:'content', component:ParentComComponent},
  {path:"**", redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
