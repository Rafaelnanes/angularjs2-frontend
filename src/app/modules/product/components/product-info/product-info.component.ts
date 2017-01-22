import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { ProductService } from './../../index';
import { Product } from './../../models/product';

@Component({
  selector: 'pro-product-info',
  templateUrl: './product-info.component.html'
})
export class ProductInfoComponent implements OnInit {

  public product: Product;
  public id: number;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.productService.getById(id).then(value => {
      this.product = value;
    });
  }

}
