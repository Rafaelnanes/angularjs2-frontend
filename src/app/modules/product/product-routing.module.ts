import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductCenterComponent } from './components/index';
import { ProductCreateComponent } from './components/index';
import { AuthGuardService } from './../shared/index';

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
