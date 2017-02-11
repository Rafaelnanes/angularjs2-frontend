import { Injectable } from '@angular/core';

import { AppSettings } from './index';

@Injectable()
export class GlobalService {

  public currentUser: string;
  public isUserLogged: boolean;
  public loading: boolean;

  constructor() { 
    this.currentUser = localStorage.getItem(AppSettings.CURRENT_USER);
    if(this.currentUser){
      this.isUserLogged = true;
    }
  }

  public removeUserSession(): void {
    this.isUserLogged = false;
  }

  public logUser(): void {
    let user: string = localStorage.getItem(AppSettings.CURRENT_USER);
    this.isUserLogged = true;
    this.currentUser = user;
  }

}
