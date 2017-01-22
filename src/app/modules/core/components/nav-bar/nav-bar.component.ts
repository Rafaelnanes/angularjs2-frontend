import { Component } from '@angular/core';
import { AuthenticationService } from './../../../shared/index';
/*
import * as lodash from 'lodash'; //npm install --save @types/lodash
declare var jsSHA: any; //local library*/

@Component({
  selector: 'pro-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

 /* shaObj: any;
  hash: String;*/

  constructor(private authService: AuthenticationService) {
    /*this.shaObj = new jsSHA("SHA-512", "TEXT");
    this.shaObj.update("This is a test");
    this.hash = this.shaObj.getHash("HEX");
    console.log('local library - hash: ', this.hash);

    var objA = {
      "name": "colin"
    }

    var objB = lodash.cloneDeep(objA);
    objB === objA // false

    console.log('external library - lodash: ', 'objB: ' + objB.name + ", objA: " + objA.name);*/
  }


  public logout(): void {
    this.authService.logout();
  }
}
