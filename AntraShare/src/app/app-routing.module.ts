import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './features/admin-page/admin-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';
import { SettingPageComponent } from './features/setting-page/setting-page.component';

const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'admins', component: AdminPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'profiles', component: ProfilePageComponent },
  { path: 'news', component: NewsFeedComponent },
  { path: 'settings', component: SettingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
