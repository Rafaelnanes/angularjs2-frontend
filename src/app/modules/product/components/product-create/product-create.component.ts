import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Validator } from '@angular/forms';
import { Product } from './../../models/product';

@Component({
  selector: 'pro-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent implements OnInit {

  public productForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(private fb:FormBuilder) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), this.internalValidator]],
      value: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    });
  }

  public submit(): void {
    this.isSubmitted = true;
    console.log("Submitted: ", this.productForm);
  }

  internalValidator(control:FormControl):{[key:string]:boolean}{
    return {"internal" : control.value == "internal"};
  }
}
