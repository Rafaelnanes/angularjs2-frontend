import { Injectable } from '@angular/core';

import { AppSettings } from './index';
import { User, UserLevel } from 'app/modules/shared/index';

@Injectable()
export class GlobalService {

  public currentUser: User;
  public isUserLogged: boolean;
  public loading: boolean;

  //currency pipe
  public currencyCode: string = 'USD';
  public symbolDisplay: boolean = true;

  //date pipe
  public datePipe: string = "dd/MM/yyyy";

  //ROLES
  public USER_ROLE_ADMIN: string = AppSettings.USER_ROLE_ADMIN;
  public USER_ROLE_VISITOR: string = AppSettings.USER_ROLE_VISITOR;
  public USER_ROLE_CUSTOMER: string = AppSettings.USER_ROLE_CUSTOMER;

  constructor() {
    let user: User = AppSettings.getUser();
    if (user != null) {
      this.currentUser = user;
      this.isUserLogged = true;
    }
  }

  public removeUserSession(): void {
    this.isUserLogged = false;
  }

  public logUser(): void {
    this.isUserLogged = true;
    this.currentUser = AppSettings.getUser();
  }

  public hasPermission(permissionKey: string): boolean {
    for (let permission of AppSettings.getUser().userLevels) {
      if (permission.level == permissionKey) {
        return true;
      }
    }
    return false;
  }

}
