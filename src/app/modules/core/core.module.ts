import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ProductModule
  ],
  declarations: [
    
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule { }
