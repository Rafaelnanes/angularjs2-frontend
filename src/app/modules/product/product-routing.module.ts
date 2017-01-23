import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductCenterComponent, ProductMainComponent } from './components/index';
import { AuthGuardService, OperationEnum } from './index';

const appRoutes: Routes = [
  {
    path: '', component: ProductCenterComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'create', component: ProductMainComponent, data: { operation: OperationEnum.CREATE }, canActivate: [AuthGuardService]
  },
  {
    path: 'update/:id', component: ProductMainComponent, data: { operation: OperationEnum.UPDATE }, canActivate: [AuthGuardService]
  },
  {
    path: 'info/:id', component: ProductMainComponent, data: { operation: OperationEnum.READ }, canActivate: [AuthGuardService]
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
