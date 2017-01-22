import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from './../../models/product';
import { ProductService } from './../../index';
import { ProductCreateComponentAbstract } from './product-create-component-abstract';

@Component({
  selector: 'pro-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent extends ProductCreateComponentAbstract {

  public product

  constructor(fb: FormBuilder, private productService: ProductService, private router: Router) {
    super();
    this.fb = fb;
  }

  public submit(): void {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      this.productService.save(this.productForm.value);
      alert("Product saved");
      this.router.navigate(["product"]);
    }
  }

}
