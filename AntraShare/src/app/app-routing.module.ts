import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { SettingPageComponent } from './features/setting-page/setting-page.component';
const routes: Routes = [
  { path: 'profiles', component: ProfilePageComponent },
  { path: 'news', component: NewsFeedComponent },
  { path: 'settings', component: SettingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
