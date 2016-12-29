import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProdutosListComponent } from './components/produtos-list.component';

const routesProdutos: Routes = [
    {
        path: 'produtos/listar',
        component: ProdutosListComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routesProdutos)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ProdutosRoutingModule { }
