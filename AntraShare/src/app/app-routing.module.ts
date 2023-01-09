import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { SettingPageComponent } from './features/setting-page/setting-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';

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
    path: '', component: LoginPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
