import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

import { Product } from './../../models/product';
import { ProductService, OperationEnum } from './../../index';
import { ProductMainComponentAbstract } from './product-main-component-abstract';

@Component({
  selector: 'pro-product-main',
  templateUrl: './product-main.component.html'
})
export class ProductMainComponent extends ProductMainComponentAbstract implements OnInit {

  public readonly: boolean = false;

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
    
    if (this.operation != OperationEnum.CREATE) {
      let id = this.route.snapshot.params['id'];
      this.productService.getById(id).then(value => {
        this.product = value;
        this.productForm.patchValue(this.product);
      });

      if (this.operation == OperationEnum.READ) {
        this.readonly = true;
      }

    }
  }

  public submit(): void {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      if (this.operation == OperationEnum.CREATE) {
        this.productService.save(this.productForm.value);
      } else {
        this.productService.update(this.productForm.value);
      }
      this.router.navigate(["product"]);
    }
  }

}
