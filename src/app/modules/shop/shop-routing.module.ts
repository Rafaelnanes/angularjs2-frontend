import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShopMainComponent } from './components/index';
import { AuthGuardCustomerService } from 'app/modules/shared/index';

const appRoutes: Routes = [
  {
    path: '', component: ShopMainComponent, canActivate: [AuthGuardCustomerService]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class ShopRoutingModule { }
