import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';//TODO
import { ProductCenterComponent, ProductMainComponent } from './components/index';
import { SharedModule } from './../shared/index';
import { ProductService } from './index';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ProductCenterComponent,
    ProductMainComponent
  ],
  exports: [

  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
