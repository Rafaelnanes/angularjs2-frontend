import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';//TODO
import { ProductModule } from './../product/index';
import { AuthenticationService, SharedModule } from './../shared/index';
import { NavBarComponent, PageNotFoundComponent, MainComponent, LoginComponent } from './components/index';

@NgModule({
  imports: [
    SharedModule,
    ProductModule,
    CoreRoutingModule
  ],
  declarations: [
    NavBarComponent,
    MainComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class CoreModule { }
