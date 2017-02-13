import { Component, OnInit } from '@angular/core';

import { CartGlobalService } from './../../services/index';

@Component({
  selector: 'crt-my-cart',
  templateUrl: './my-cart.component.html'
})
export class MyCartComponent implements OnInit {

  constructor(public cartGlobalService:CartGlobalService) { }

  ngOnInit() {
  }

}
