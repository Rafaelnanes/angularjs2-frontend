import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';//TODO
import { ProductModule } from './../product/index';
import { AuthenticationService, SharedModule } from './../shared/index';
import { NavBarComponent, PageNotFoundComponent, MainComponent, LoginComponent } from './components/index';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  declarations: [
    NavBarComponent,
    MainComponent,
    LoginComponent,
    PageNotFoundComponent,
    UnauthorizedComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class CoreModule { }
