import { Component, OnInit } from '@angular/core';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';
import { Product } from './../../models/index';
import { GlobalService } from 'app/modules/shared/index';

@Component({
  selector: 'pro-product-center-websocket',
  templateUrl: './product-center-websocket.component.html',
  styles: []
})
export class ProductCenterWebsocketComponent implements OnInit {

  public products: Product[];
  constructor(public globalService: GlobalService) { }

  ngOnInit() {

    // connect
    var ws = new $WebSocket("ws://127.0.0.1:8080/java-backend-api/getAllProducts");

     ws.getDataStream().subscribe(
      res => {
        this.products = [];
        for (let product of JSON.parse(res.data)) {
          this.products.push(product);
        }
      },
      function (e) { console.log('Error: ' + e.message); },
      function () { console.log('Completed'); }
    );

  }

}
