import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './features/news-feed-page/news-feed/news-feed.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { SettingPageComponent } from './features/setting-page/setting-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';
import { AdminPageComponent } from './features/admin-page/admin-page.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: 'news', component: NewsFeedComponent
  },
  {
    path: 'profile', component: ProfilePageComponent
  },
  {
    path: 'settings', component: SettingPageComponent
  },
  
  {
    path: 'login', component: LoginPageComponent
  },

  {
    path: 'register', component: RegisterPageComponent
  },

  {
    path: 'admin', component: AdminPageComponent,
    canActivate: [AuthGuard]

  },
  
  {
    path: '', component: LoginPageComponent
  },

  {
    // path: '**', component: NotFoundComponent
    path: '**', component: LoginPageComponent

  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
