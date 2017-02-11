import { Component } from '@angular/core';
import { GlobalService } from './modules/shared/index';

@Component({
  selector: 'pro-app',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

    constructor(public globalService: GlobalService){
    }
}
