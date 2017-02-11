import { Injectable } from '@angular/core';

import { AppSettings } from './index';

@Injectable()
export class GlobalService {

  public currentUser: string;
  public isUserLogged: boolean;
  public loading: boolean;

  constructor() { }

  public removeUserSession(): void {
    this.isUserLogged = false;
  }

  public logUser(): void {
    let user: string = localStorage.getItem(AppSettings.CURRENT_USER);
    this.isUserLogged = true;
    this.currentUser = user;
  }

}
