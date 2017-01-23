import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Validator } from '@angular/forms';

export abstract class ProductCreateComponentAbstract {

  public productForm: FormGroup;
  public isSubmitted: boolean = false;
  public product;
  protected fb: FormBuilder;
  protected operation: string;

  constructor() { }

  protected buildForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      value: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      id: ['']
    });
  }

}
