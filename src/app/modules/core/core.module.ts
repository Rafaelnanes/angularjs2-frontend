import { NgModule } from '@angular/core';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './../product/product.module';
import { SharedModule } from './../shared/shared.module';
import { AuthenticationService } from './../shared/services/authentication.service';

//Components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    SharedModule,
    ProductModule,
    AppRoutingModule
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
