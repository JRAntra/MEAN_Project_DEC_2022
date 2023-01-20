import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import{PopupserviceService} from './shared/services/popupservice.service'

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NewsFeedService } from './features/news-feed/news-feed.service';






@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
    
  ],
  providers: [PopupserviceService, NewsFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
