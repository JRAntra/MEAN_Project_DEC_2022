import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstFewCharsPipe } from './shared/pipes/first-few-chars.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TopNavModule } from './shared/top-nav/top-nav.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstFewCharsPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TopNavModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {
      appearance: 'outline', floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }