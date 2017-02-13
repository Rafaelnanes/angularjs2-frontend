import { Injectable } from '@angular/core';

import { AppSettings } from './index';

@Injectable()
export class GlobalService {

  public currentUser: string;
  public isUserLogged: boolean;
  public loading: boolean;

  //currency pipe
  public currencyCode: string = 'USD';
  public symbolDisplay: boolean = true;

  //date pipe
  public datePipe:string = "dd/MM/yyyy";

  //ROLES
  public USER_ROLE_ADMIN: string = AppSettings.USER_ROLE_ADMIN;
  public USER_ROLE_VISITOR: string = AppSettings.USER_ROLE_VISITOR;
  public USER_ROLE_CUSTOMER: string = AppSettings.USER_ROLE_CUSTOMER;

  constructor() {
    this.currentUser = localStorage.getItem(AppSettings.CURRENT_USER);
    if (this.currentUser) {
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

  public hasPermission(permissionKey: string): boolean {
    for (let permission of AppSettings.getUserPermissions()) {
      if (permission == permissionKey) {
        return true;
      }
    }
    return false;
  }

}
