import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { CoreModule } from './modules/core/index';
import { ShopModule } from './modules/shop/index';
import { SharedModule, AuthGuardService, AuthGuardAdminService, DefaultHttp, GlobalService, AuthGuardCustomerService, AuthGuardVisitorService, AuthenticationService } from './modules/shared/index';
import { AppComponent } from './app.component';
import { CartGlobalService } from './modules/shop/services/cart-global.service';

let locale = "en-US";
if(!localStorage.getItem("locale")){
  localStorage.setItem("locale", "en-US");
}else{
  locale = localStorage.getItem("locale");
}

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
    sharedProviders,
    CartGlobalService,
    { provide: LOCALE_ID, useValue: locale}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
