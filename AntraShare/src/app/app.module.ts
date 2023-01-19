import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
// import { First20CharsPipe } from './features/pipes/first20-chars.pipe';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> Release_Branch/BossHypnotizer

@NgModule({
  declarations: [
    AppComponent,
    // First20CharsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
