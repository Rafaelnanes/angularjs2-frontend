import { Injectable } from '@angular/core';

import { Produto } from './../models/produto';

@Injectable()
export class ProdutosService {

   private produtosMock: Produto[] = [new Produto( 1, 'Carro' ), new Produto( 1, 'Moto' )];

    constructor() { }

    public selectAll(): Produto[] {
        return this.produtosMock;
    }

}
