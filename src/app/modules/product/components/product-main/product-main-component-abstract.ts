import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Validator } from '@angular/forms';
import { ProductService, OperationEnum, Product } from './../../index';

export abstract class ProductMainComponentAbstract {

  public productForm: FormGroup;
  public isSubmitted: boolean = false;
  public product: Product;
  protected fb: FormBuilder;
  protected operation: OperationEnum;

  constructor() { }

  protected buildForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      value: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      id: ['']
    });
  }

}
