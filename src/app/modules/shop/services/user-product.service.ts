import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { AppSettings, DefaultHttp, FilterDTO, ResponseServer } from './../../shared/index';
import { UserProduct } from './../models/index';

@Injectable()
export class UserProductService {

  private MODULE_API_PATH: string = "userproduct";

  constructor(private defaultHttp: DefaultHttp) { }

  public save(userProduct: UserProduct[]): Promise<Response> {
    return this.defaultHttp.post(this.MODULE_API_PATH, userProduct);
  };

}
