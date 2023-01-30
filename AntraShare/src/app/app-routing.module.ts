import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin-page/admin-page.module')
      .then(m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login-page/login-page.module')
      .then(m => m.LoginPageModule)
  },
  {
    // path: 'news', component: NewsFeedComponent
    path:'news',
    loadChildren: ()=>import('./features/news-feed-page/news-feed-page.module')
      .then(m => m.NewsFeedPageModule)
  },
  {
    path: 'profile',
    loadChildren: ()=>import('./features/profile-page/profile-page.module')
      .then(m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register-page/register-page.module')
      .then(m => m.RegisterPageModule)
  },
  {
    path: 'settings',
    loadChildren: ()=>import('./features/setting-page/setting-page.module')
      .then(m => m.SettingPageModule)
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
