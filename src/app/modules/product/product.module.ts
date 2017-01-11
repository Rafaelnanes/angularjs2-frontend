import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCenterComponent } from './product-center/product-center.component';
import { ProductCreateComponent } from './product-create/product-create.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductCenterComponent,
    ProductCreateComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ProductModule { }
