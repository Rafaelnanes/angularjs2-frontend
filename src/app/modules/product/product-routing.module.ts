import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductCenterComponent } from './product-center/product-center.component';

import { AuthGuardService } from './../shared/services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'product/center', component: ProductCenterComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'product/create', component: ProductCreateComponent, canActivate: [AuthGuardService]
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
