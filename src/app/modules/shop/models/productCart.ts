import { Product } from 'app/modules/product/index';
export class ProductCart {
    constructor(public product?: Product, public size?: number) { }
}