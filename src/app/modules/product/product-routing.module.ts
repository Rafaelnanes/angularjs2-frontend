import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductCenterComponent, ProductMainComponent } from './components/index';
import { AuthGuardService, OperationEnum, AuthGuardAdminService } from 'app/modules/shared/index';

const appRoutes: Routes = [
  {
    path: '', component: ProductCenterComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'create', component: ProductMainComponent, data: { operation: OperationEnum.CREATE }, canActivate: [AuthGuardAdminService]
  },
  {
    path: 'update/:id', component: ProductMainComponent, data: { operation: OperationEnum.UPDATE }, canActivate: [AuthGuardAdminService]
  },
  {
    path: 'info/:id', component: ProductMainComponent, data: { operation: OperationEnum.READ }, canActivate: [AuthGuardAdminService]
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
