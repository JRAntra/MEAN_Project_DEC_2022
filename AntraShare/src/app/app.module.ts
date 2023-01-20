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
import { UserFormsComponent } from './formInput/user-forms/user-forms.component';
<<<<<<< HEAD
import { TestAComponent } from './dataSharing/test-a/test-a.component';
import { TestBComponent } from './dataSharing/test-b/test-b.component'
=======
import { LifeCycleComponent } from './lifeCycle/life-cycle/life-cycle.component';
import { ChildLifeCycleComponent } from './lifeCycle/child-life-cycle/child-life-cycle.component';
import { ValidatorsComponent } from './validators/validators.component'
>>>>>>> 7383eeb649c05138090e13bd5873e99ba888c753
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ChildDataBindingComponent,
    UserFormsComponent,
<<<<<<< HEAD
    TestAComponent,
    TestBComponent,
=======
    LifeCycleComponent,
    ChildLifeCycleComponent,
    ValidatorsComponent,
>>>>>>> 7383eeb649c05138090e13bd5873e99ba888c753

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