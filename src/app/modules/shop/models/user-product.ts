import { Product } from 'app/modules/product/index';
export class UserProduct {
    constructor(public product?: Product, public quantity?: number) { }
}