import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

import { Product } from './../../models/product';
import { ProductService } from './../../index';
import { ProductCreateComponentAbstract } from './product-create-component-abstract';

@Component({
  selector: 'pro-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent extends ProductCreateComponentAbstract implements OnInit {

  constructor(
    public fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    super();
  }

  public ngOnInit(): void {
    this.buildForm();
    this.setFormModelValue();
  }

  private setFormModelValue(): void {
    this.operation = this.route.snapshot.data['operation'];
    if (this.operation != "create") {
      let id = this.route.snapshot.params['id'];
      this.productService.getById(id).then(value => {
        this.product = value;
        this.productForm.patchValue(this.product);
      });
    }
  }

  public submit(): void {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      if (this.operation == "create") {
        this.productService.save(this.productForm.value);
      } else {
        this.productService.update(this.productForm.value);
      }
      this.router.navigate(["product"]);
    }
  }

}
