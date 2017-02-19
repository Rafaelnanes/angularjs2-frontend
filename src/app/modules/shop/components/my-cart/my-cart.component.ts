import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { CartGlobalService, UserProductService, } from './../../services/index';
import { GlobalService, DefaultHttp } from 'app/modules/shared/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { UserProduct } from './../../models/index';

@Component({
  selector: 'crt-my-cart',
  templateUrl: './my-cart.component.html'
})
export class MyCartComponent implements OnInit {

  constructor(
    private defaultHttp: DefaultHttp,
    public cartGlobalService: CartGlobalService,
    public globalService: GlobalService,
    public userProductService: UserProductService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.userProductService.getByUserId(this.globalService.currentUser.id).then(response => {
      this.cartGlobalService.userCart.userProducts = response.json();
      for (let up of this.cartGlobalService.userCart.userProducts) {
        up.total = up.product.value * up.quantity;
      }
      this.cartGlobalService.calculateTotal();
    }).catch(response => {
      this.defaultHttp.handleError("Error loading the cart", this.toastr, response);
    });
  }

  public saveCart(): void {
    this.userProductService.save(this.cartGlobalService.userCart.userProducts).then(response => {
      this.toastr.success('Cart saved');
    }).catch(response => {
      this.defaultHttp.handleError('Error saving the cart', this.toastr, response);
    });
  }

  public removeProduct(userProduct: UserProduct): void {
    this.cartGlobalService.removeProduct(userProduct);
  }

  public decrementProduct(userProduct: UserProduct): void {
    this.cartGlobalService.decrementProduct(userProduct);
  }

  public incrementProduct(userProduct: UserProduct): void {
    this.cartGlobalService.addProduct(userProduct.product);
  }

}
