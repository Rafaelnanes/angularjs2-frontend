import { Component, OnInit, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Product } from './../../models/index';
import { ProductService } from './../../index';
import { DefaultHttp } from 'app/modules/shared/index';
declare var jQuery: any;

@Component({
  selector: 'pro-product-center',
  templateUrl: './product-center.component.html',
  styles: []
})
export class ProductCenterComponent implements OnInit {

  public products: Product[];
  public productSelected: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    public defaultHttp: DefaultHttp) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public ngOnInit() {
    this.refreshProducts();
  }

  private refreshProducts() {
    this.defaultHttp.loading = true;
    this.productService.getAll().then(response => {
      this.defaultHttp.loading = false;
      this.products = response.json();
    }).catch(response => {
      this.defaultHttp.loading = false;
      console.log('error', response);
    });
  }

  public info(product: Product): void {
    this.router.navigate(["product", "info", product.id]);
  }

  public update(product: Product): void {
    this.router.navigate(["product", "update", product.id]);
  }

  public delete(product: Product): void {
    this.defaultHttp.loading = true;
    this.productService.remove(product).then(response => {
      this.refreshProducts();
      this.toastr.success("Product removed");
    }).catch(response => {
      this.defaultHttp.loading = false;
      this.toastr.warning("Error: " + response);
    });
  }

  public openModal(product: Product): void {
    this.productSelected = product;
    jQuery(document).ready(function () {
      jQuery("#myModal").modal();
    });
  }
}
