import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { CartGlobalService, UserProductService, } from './../../services/index';
import { GlobalService, DefaultHttp } from 'app/modules/shared/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'crt-my-cart',
  templateUrl: './my-cart.component.html'
})
export class MyCartComponent implements OnInit {

  constructor(
    public cartGlobalService: CartGlobalService,
    public globalService: GlobalService,
    public userProductService: UserProductService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  public saveCart(): void {
    this.userProductService.save(this.cartGlobalService.userCart).then(response => {
      this.toastr.success('Cart saved');
    }).catch(response => {
      DefaultHttp.handleError('Error saving the cart', this.toastr, response);
    });
  }

}
