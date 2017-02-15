import { Product } from 'app/modules/product/index';
import { User } from 'app/modules/shared/index';
export class UserProduct {
    constructor(public product?: Product, public quantity?: number, public total?: number, public id?: number, public user?: User) { }
}