import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'login',component: LoginPageComponent}
  //localhost:4200/login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
