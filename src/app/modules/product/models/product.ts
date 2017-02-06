import { ProductType } from './productType';
export class Product {
  constructor(public id?: number, public name?: string, public value?: number, public productType?: ProductType) { }
}

