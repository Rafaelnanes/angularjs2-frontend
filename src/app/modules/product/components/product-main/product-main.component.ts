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
        if (!lodash.isEmpty(this.product.date)) {
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
      let product: Product = this.productForm.value;
      if (!lodash.isEmpty(product.date)) {
        product.date = this.date.getTime().toString();
      }
      if (this.operation == OperationEnum.CREATE) {
        this.onSave(product);
      } else {
        this.onUpdate(product);
      }

    }
  }

  private onSave(product: Product): void {

    this.productService.save(product).then(response => {
      this.toastr.success('Product added');
      this.resetFormValues();
    }).catch(response => {
      DefaultHttp.handleError('Error adding product', this.toastr, response);
    });
  }

  private onUpdate(product: Product): void {
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
      date: [''],
      id: ['']
    });
  }

  private watchDateChange(): void {
    this.productForm.get('date').valueChanges.subscribe(data => {
      if (data != null) {
        let str: any = data;
        str = str.split('-');
        this.date = new Date(str[0], str[1] - 1, str[2]);
      }
    });
  }

  private formatDate(date: Date): string {
    return new DatePipe('en-US').transform(date, 'yyyy-MM-dd');
  }

  private changeVisibleDatePicker(): void {
    setTimeout(() => {
      this.isShowDatePicker = false;
    }, 100);
  }

}
