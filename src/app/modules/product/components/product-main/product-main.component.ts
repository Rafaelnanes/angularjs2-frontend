import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, Validator } from '@angular/forms';

import { Product } from './../../models/index';
import { ProductService, OperationEnum } from './../../index';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'pro-product-main',
  templateUrl: './product-main.component.html'
})
export class ProductMainComponent implements OnInit {

  public readonly: boolean = false;
  public productForm: FormGroup;
  public isSubmitted: boolean = false;
  public product: Product;
  protected operation: OperationEnum;

  constructor(
    public fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public ngOnInit(): void {
    this.buildForm();
    this.setFormModelValue();
  }

  private setFormModelValue(): void {
    this.operation = this.route.snapshot.data['operation'];

    if (this.operation != OperationEnum.CREATE) {
      let id = this.route.snapshot.params['id'];
      this.productService.getById(id).then(response => {
        this.product = response.json();
        this.productForm.patchValue(this.product);
      });

      if (this.operation == OperationEnum.READ) {
        this.readonly = true;
      }

    }
  }

  public send(): void {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      if (this.operation == OperationEnum.CREATE) {
        this.onSave();
      } else {
        this.onUpdate();
      }

    }
  }

  private onSave(): void {
    this.productService.save(this.productForm.value).then(response => {
      this.toastr.success('Product added');
      this.resetFormValues();
    }).catch(response => {
      this.toastr.warning('Error: ' + response);
    });
  }

  private onUpdate(): void {
    this.productService.update(this.productForm.value).then(response => {
      this.toastr.success('Product updated');
      this.resetFormValues();
    }).catch(response => {
      this.toastr.warning('Error: ' + response);
    });
  }

  private resetFormValues(): void {
    this.isSubmitted = false;
  }

  protected buildForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      value: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      id: ['']
    });
  }

}
