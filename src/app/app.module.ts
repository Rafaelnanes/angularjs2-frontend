import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { CoreModule } from './modules/core/index';
import { ShopModule } from './modules/shop/index';
import { SharedModule, AuthGuardService, AuthGuardAdminService, DefaultHttp, GlobalService, AuthGuardCustomerService, AuthGuardVisitorService, AuthenticationService } from './modules/shared/index';
import { AppComponent } from './app.component';

//only services from Shared module
const sharedProviders: any[] = [
  AuthGuardService,
  AuthGuardAdminService,
  AuthGuardCustomerService,
  AuthGuardVisitorService,
  DefaultHttp,
  GlobalService,
  AuthenticationService
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    sharedProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
