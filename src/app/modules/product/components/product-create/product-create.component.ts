import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product } from './../../models/product';
import { ProductCreateComponentAbstract } from './product-create-component-abstract';
import { ProductService } from './../../index';

@Component({
  selector: 'pro-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent extends ProductCreateComponentAbstract {

  public product

  constructor(fb: FormBuilder, private productService: ProductService) {
    super();
    this.fb = fb;
  }

  public submit(): void {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      this.productService.save(this.productForm.value);
    }
  }

}
