import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppSettings } from './index';
import { AbstractAuthGuard } from './abstract-auth-guard';

@Injectable()
export class AuthGuardAdminService extends AbstractAuthGuard implements CanActivate {

  constructor(protected router: Router) {
    super(router);
  }

  public canActivate(): boolean {
    let isActivate: boolean = this.isUserLogged();
    if (isActivate) {
      for (let permission of AppSettings.getUserPermissions()) {
        if (permission == AppSettings.USER_ROLE_ADMIN) {
          return true;
        }
      }
      this.router.navigate(['/403']);

    }
    return isActivate;
  }

}