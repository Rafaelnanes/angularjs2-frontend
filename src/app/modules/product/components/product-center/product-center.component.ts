import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

import { Product } from './../../models/product';
import { ProductService } from './../../index';

@Component({
  selector: 'pro-product-center',
  templateUrl: './product-center.component.html',
  styles: []
})
export class ProductCenterComponent implements OnInit {

  public products: Promise<Product[]>;

  constructor(private productService: ProductService, private router: Router) { }

  public ngOnInit() {
    this.refreshProducts();
  }

  private refreshProducts() {
    this.products = this.productService.getAll();
  }

  public info(product: Product): void {
    this.router.navigate(["product", "info", product.id]);
  }

  public update(product: Product): void {
    this.router.navigate(["product", "update", product.id]);
  }

  public delete(product: Product): void {
    this.productService.remove(product).then(response => {
      this.refreshProducts();
    });
  }
}
