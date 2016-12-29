import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosListComponent } from './components/produtos-list.component';

@NgModule({
  imports: [
    CommonModule, ProdutosRoutingModule
  ],
  declarations: [ProdutosListComponent]
})
export class ProdutosModule { }
