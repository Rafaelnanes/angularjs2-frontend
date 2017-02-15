import { UserProduct } from './user-product';
export class Cart {
    constructor(public total?: number, public userProducts?: UserProduct[]) { }
}