import { Injectable } from '@angular/core';

import { UserProduct } from './../models/index';
import { Product } from 'app/modules/product/index';
import { AppSettings } from 'app/modules/shared/index';
import * as lodash from 'lodash';

@Injectable()
export class CartGlobalService {

  public userCart: UserProduct[];

  constructor() {
    let userCartStr: string = localStorage.getItem(AppSettings.USER_CART);
    this.userCart = [];
    if (!lodash.isEmpty(userCartStr)) {
      this.userCart = JSON.parse(userCartStr);
    }
  }

  public addProduct(product: Product): void {
    let isExists = false;
    for (let pc of this.userCart) {
      if (pc.product.id == product.id) {
        pc.quantity++;
        isExists = true;
      }
    }
    if (!isExists) {
      this.userCart.push(new UserProduct(product, 1));
    }
    localStorage.setItem(AppSettings.USER_CART, JSON.stringify(this.userCart));
  }

  public resetCart():void{
    this.userCart = [];
  }

}
