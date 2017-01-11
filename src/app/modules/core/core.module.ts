import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './../product/product.module';

//Components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
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
    RouterModule,
    NavBarComponent
  ],
  providers:[

  ]
})
export class CoreModule { }
