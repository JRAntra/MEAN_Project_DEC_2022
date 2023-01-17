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
import { First10CharsPipe } from './pipes/first10-chars.pipe';
import { ChildDataBindingComponent } from './data-binding/child-data-binding/child-data-binding.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFormsComponent } from './formInput/user-forms/user-forms.component'
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ChildDataBindingComponent,
    UserFormsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HomepageModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }