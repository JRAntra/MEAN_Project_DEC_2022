import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { SettingPageComponent } from './features/setting-page/setting-page.component';
import { AdminPageComponent } from './features/admin-page/admin-page.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { NewsfeedPageComponent } from './features/newsfeed-page/newsfeed-page.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent },
  { path: 'settings', component: SettingPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'newsfeed', component: NewsfeedPageComponent },
  { path: 'profile', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
