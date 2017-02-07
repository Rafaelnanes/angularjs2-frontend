import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Product } from './../models/product';
import { AppSettings, DefaultHttp } from './../../shared/index';

@Injectable()
export class ProductService {

  private MODULE_API_PATH: string = "product";

  constructor(private defaultHttp: DefaultHttp) {

  }

  public save(product: Product): Promise<Response> {
    return this.defaultHttp.post(this.MODULE_API_PATH, product);
  };
  public update(product: Product): Promise<Response> {
    return this.defaultHttp.put(this.MODULE_API_PATH, product);
  };

  public getAll(): Promise<Response> {
    return this.defaultHttp.get(this.MODULE_API_PATH);
  };

  public getAllProductTypes(): Promise<Response> {
    return this.defaultHttp.get(this.MODULE_API_PATH + "/productTypes");
  };

  public getById(id: number): Promise<Response> {
    return this.defaultHttp.get(this.MODULE_API_PATH + "/" + id);
  };

  public remove(product: Product): Promise<Response> {
    return this.defaultHttp.delete(this.MODULE_API_PATH + "/" + product.id);
  };


}
