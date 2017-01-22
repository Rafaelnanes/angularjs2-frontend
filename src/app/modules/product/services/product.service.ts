import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { IGenericService } from './../../shared/index';
import { Product } from './../models/product';
import { AppSettings, DefaultHttp } from './../../shared/index';

@Injectable()
export class ProductService extends DefaultHttp<Product> implements IGenericService<Product>{

  constructor(protected http: Http, protected router: Router) {
    super(http, router);
  }

  public save(product: Product): void {
    this.post("product", JSON.stringify(product))
      .toPromise().then(response => {
        console.log('response.data', response.json);
      })
  };
  public update(product: Product): void {
    console.log("update");
  };
  public remove(product: Product): void {
    console.log("delete");
  };

  public getAll(): Product[] {
    return null;
  };
  public getById(): Product {
    return null;
  };

}
