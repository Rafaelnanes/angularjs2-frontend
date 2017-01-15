import { Directive, forwardRef } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[proExternalValidator][formControlName],[proExternalValidator][formControl],[proExternalValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ExternalValidatorDirective), multi: true }
  ]
})
export class ExternalValidatorDirective implements Validator {
  constructor() { }
  validate(control: FormControl): { [key: string]: boolean } {
    return { "external": control.value === "external" };
  }

  registerOnValidatorChange():void{
    // listening onChange
  }

}
