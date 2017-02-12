import { Component, OnInit, ViewContainerRef, EventEmitter } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, Validator } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Product } from './../../models/index';
import { ProductService, OperationEnum } from './../../index';
import { DefaultHttp, GlobalService } from 'app/modules/shared/index';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as lodash from 'lodash';

@Component({
  selector: 'pro-product-main',
  templateUrl: './product-main.component.html'
})
export class ProductMainComponent implements OnInit {

  public readonly: boolean = false;
  public productForm: FormGroup;
  public isSubmitted: boolean = false;
  public product: Product;
  public operation: OperationEnum;
  public productTypes: string[] = [];
  public date: Date;
  public isShowDatePicker: boolean;

  constructor(
    public fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public ngOnInit(): void {
    this.buildForm();
    this.setFormModelValue();
    this.getAllProductTypes();
    this.date = new Date();
    this.watchDateChange();
  }

  private getAllProductTypes(): void {
    this.productService.getAllProductTypes().then(response => {
      this.productTypes = response.json();
    }).catch(response => {
      DefaultHttp.handleError('Error loading product types', this.toastr, response);
    });
  }

  private setFormModelValue(): void {
    this.operation = this.route.snapshot.data['operation'];
    if (this.operation != OperationEnum.CREATE) {
      let id = this.route.snapshot.params['id'];
      this.productService.getById(id).then(response => {
        this.product = response.json();
        if (this.product.date != null) {
          this.product.date = this.formatDate(new Date(this.product.date));
        }
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
    let product: Product = this.productForm.value;
    product.date = this.date.getTime().toString();
    this.productService.save(product).then(response => {
      this.toastr.success('Product added');
      this.resetFormValues();
    }).catch(response => {
      DefaultHttp.handleError('Error adding product', this.toastr, response);
    });
  }

  private onUpdate(): void {
    let product: Product = this.productForm.value;
    product.date = this.date.getTime().toString();
    this.productService.update(product).then(response => {
      this.toastr.success('Product updated');
      this.resetFormValues();
    }).catch(response => {
      DefaultHttp.handleError('Error updating product', this.toastr, response);
    });
  }

  private resetFormValues(): void {
    this.isSubmitted = false;
  }

  public onChangeDate(event: Date): void {
    this.date = event;
    this.productForm.get('date').patchValue(this.formatDate(this.date));
    this.isShowDatePicker = false;
  }

  private buildForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      value: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      productType: ['', Validators.required],
      date: ['', Validators.required],
      id: ['']
    });
  }

  private watchDateChange(): void {
    this.productForm.get('date').valueChanges.subscribe(data => {
      let str: any = data;
      str = str.split('/');
      this.date = new Date(str[2], str[1] - 1, str[0]);
    });
  }

  private formatDate(date: Date): string {
    return new DatePipe('en-US').transform(date, 'dd/MM/yyyy');
  }

}
