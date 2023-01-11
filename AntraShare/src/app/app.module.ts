import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomepageModule } from './homepage/homepage.module';
import { RandomColorDirective } from './directives/random-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HomepageModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }