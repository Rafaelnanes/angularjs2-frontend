import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCenterComponent } from './components/product-center/product-center.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ExternalValidatorDirective } from './directives/external-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductCenterComponent,
    ProductCreateComponent,
    ExternalValidatorDirective
  ],
  exports: [
    RouterModule
  ]
})
export class ProductModule { }
