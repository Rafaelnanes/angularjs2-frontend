import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductCenterComponent } from './product-center/product-center.component';

const appRoutes: Routes = [
  {
    path: 'product/center', component: ProductCenterComponent
  },
  {
    path: 'product/create', component: ProductCreateComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: []
})
export class ProductRoutingModule { }
