import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCenterComponent  } from './components/product-center/product-center.component';
import { ProductCreateComponent  } from './components/product-create/product-create.component';

import { ExternalValidatorDirective } from './directives/external-validator.directive';
import { AppErrorFormComponent } from './../shared/components/app-error-form/app-error-form.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
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
