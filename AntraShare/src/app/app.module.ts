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
import { TestAComponent } from './dataSharing/test-a/test-a.component';
import { TestBComponent } from './dataSharing/test-b/test-b.component'
import { LifeCycleComponent } from './lifeCycle/life-cycle/life-cycle.component';
import { ChildLifeCycleComponent } from './lifeCycle/child-life-cycle/child-life-cycle.component';
import { ValidatorsComponent } from './validators/validators.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ParentComComponent } from './contentProjection/parent-com/parent-com.component';
import { ChildComComponent } from './contentProjection/parent-com/child-com/child-com.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ChildDataBindingComponent,
    UserFormsComponent,
    TestAComponent,
    TestBComponent,
    LifeCycleComponent,
    ChildLifeCycleComponent,
    ValidatorsComponent,
    InventoryComponent,
    ParentComComponent,
    ChildComComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HomepageModule,
    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }