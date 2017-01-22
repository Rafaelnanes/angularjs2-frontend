import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductCenterComponent, ProductCreateComponent, ProductInfoComponent } from './components/index';
import { AuthGuardService } from './../shared/index';

const appRoutes: Routes = [
  {
    path: '', component: ProductCenterComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'create', component: ProductCreateComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'info/:id', component: ProductInfoComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [],
  exports: []
})
export class ProductRoutingModule { }
