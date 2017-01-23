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

  private MODULE_API_PATH: string = "product";

  constructor(protected http: Http, protected router: Router) {
    super(http, router);
  }

  public save(product: Product): Promise<Product> {
    return this.post(this.MODULE_API_PATH, JSON.stringify(product))
      .toPromise().then(response => response.json());
  };
  public update(product: Product): Promise<Product> {
    return this.put(this.MODULE_API_PATH, JSON.stringify(product))
      .toPromise().then(response => response.json());
  };

  public getAll(): Promise<Product[]> {
    return this.get(this.MODULE_API_PATH).toPromise().then(response => response.json() as Product[]).catch(this.handleError);
  };
  public getById(id: number): Promise<Product> {
    return this.get(this.MODULE_API_PATH + "/" + id).toPromise().then(response => response.json() as Product).catch(this.handleError);
  };

  public remove(product: Product): Promise<Product> {
    return this.delete(this.MODULE_API_PATH + "/" + product.id).toPromise().then(response => response).catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
