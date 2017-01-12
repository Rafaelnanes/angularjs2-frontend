import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions /*extends BaseRequestOptions*/ {

  constructor() {
    /*super();*/
    /*this.headers.set('Content-Type', 'application/json');
    this.url = "http://localhost:8080/";*/
  }
}

/*export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };*/

