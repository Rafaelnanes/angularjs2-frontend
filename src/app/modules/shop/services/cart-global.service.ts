import { Injectable } from '@angular/core';

import { UserProduct, Cart } from './../models/index';
import { Product } from 'app/modules/product/index';
import { AppSettings } from 'app/modules/shared/index';
import * as lodash from 'lodash';

@Injectable()
export class CartGlobalService {

  public userCart: Cart;

  constructor() {
    let userCartStr: string = localStorage.getItem(AppSettings.USER_CART);
    this.userCart = new Cart();
    this.userCart.userProducts = [];
    if (!lodash.isEmpty(userCartStr)) {
      this.userCart = JSON.parse(userCartStr);
    }
  }

  public addProduct(product: Product): void {
    let isExists = false;
    for (let pc of this.userCart.userProducts) {
      if (pc.product.id == product.id) {
        pc.quantity++;
        pc.total = pc.quantity * pc.product.value;
        isExists = true;
      }
    }
    if (!isExists) {
      this.userCart.userProducts.push(new UserProduct(product, 1, product.value));
    }
    this.calculateTotal();
    localStorage.setItem(AppSettings.USER_CART, JSON.stringify(this.userCart));
  }

  public decrementProduct(userProduct: UserProduct): void {
    let quantity: number = -1;
    for (let pc of this.userCart.userProducts) {
      if (pc.product.id == userProduct.product.id) {
        pc.quantity--;
        pc.total = pc.quantity * pc.product.value;
        quantity = pc.quantity;
      }
    }
    if (quantity == 0) {
      this.removeProduct(userProduct);
    }
    this.calculateTotal();
    localStorage.setItem(AppSettings.USER_CART, JSON.stringify(this.userCart));
  }

  public removeProduct(userProduct: UserProduct): void {
    let index: number;
    lodash.remove(this.userCart.userProducts, item => item.product.id == userProduct.product.id);
    this.calculateTotal();
    localStorage.setItem(AppSettings.USER_CART, JSON.stringify(this.userCart));
  }

  public resetCart(): void {
    this.userCart = [];
  }

  public calculateTotal():void{
    this.userCart.total = 0;
    for(let up of this.userCart.userProducts){
      this.userCart.total += up.total;
    }
  }

}
