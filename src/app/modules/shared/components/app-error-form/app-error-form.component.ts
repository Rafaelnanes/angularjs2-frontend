import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pro-app-error-form',
  templateUrl: './app-error-form.component.html'
})
export class AppErrorFormComponent {

  @Input()
  public formCtrl:FormControl;

  @Input()
  public isSubmitted:boolean;

  constructor() {
   }

}
