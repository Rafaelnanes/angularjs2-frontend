import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopMainComponent } from './components/index';
import { SharedModule } from './../shared/index';
import { MyCartComponent } from './components/my-cart/my-cart.component';

import { ProductService } from 'app/modules/product/index';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
  declarations: [
    ShopMainComponent,
    MyCartComponent
  ],
  providers: [
    ProductService
  ]
})
export class ShopModule { }
