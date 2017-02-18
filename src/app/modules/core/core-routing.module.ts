import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent, LoginComponent, MainComponent, UnauthorizedComponent } from './components/index';
import { AuthGuardVisitorService } from './../shared/index';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardVisitorService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/:error',
    component: LoginComponent
  },
  { path: 'product', loadChildren: 'app/modules/product/product.module#ProductModule' },
  { path: 'shop', loadChildren: 'app/modules/shop/shop.module#ShopModule' },
  { path: '403', component: UnauthorizedComponent },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [],
  declarations: []
})
export class CoreRoutingModule { }
