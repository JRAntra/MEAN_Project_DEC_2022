import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './features/admin-page/admin-page.component';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';
import { SettingPageComponent } from './features/setting-page/setting-page.component';
import { PreventVisitAdminGuard } from './shared/guard/prevent-visit-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  {
    path: 'admins',
    loadChildren: () =>
      import('./features/admin-page/admin-page.module').then(
        (m) => m.AdminPageRoutingModule
      ),
    canActivate: [PreventVisitAdminGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login-page/login-page.module').then(
        (m) => m.LoginPageRoutingModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/register-page/register-page.module').then(
        (m) => m.RegisterPageRoutingModule
      ),
  },
  {
    path: 'profiles',
    loadChildren: () =>
      import('./features/profile-page/profile-page.module').then(
        (m) => m.ProfilePageRoutingModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./features/news-feed/news-feed.nodule').then(
        (m) => m.NewsFeedRoutingModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/setting-page/setting-page.module').then(
        (m) => m.SettingPageRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
