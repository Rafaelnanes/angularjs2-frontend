import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { CoreModule } from './modules/core/index';
import { ShopModule } from './modules/shop/index';
import { SharedModule, AuthGuardService, AuthGuardAdminService, DefaultHttp, GlobalService } from './modules/shared/index';
import { AppComponent } from './app.component';

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
    CoreModule,
    ShopModule
  ],
  providers: [
    AuthGuardService,
    AuthGuardAdminService,
    DefaultHttp,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
