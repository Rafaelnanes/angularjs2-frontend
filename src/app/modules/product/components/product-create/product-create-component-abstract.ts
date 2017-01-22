import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Validator } from '@angular/forms';

export abstract class ProductCreateComponentAbstract implements OnInit {

  public productForm: FormGroup;
  public isSubmitted: boolean = false;
  protected fb:FormBuilder;

  constructor() { }

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      value: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    });
  }
  
}
