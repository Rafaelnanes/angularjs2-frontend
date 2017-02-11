import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppSettings } from './index';
import { AbstractAuthGuard } from './abstract-auth-guard';

@Injectable()
export class AuthGuardService extends AbstractAuthGuard implements CanActivate {

    constructor(protected router: Router) {
        super(router);
    }

    public canActivate(): boolean {
        return this.isUserLogged();
    }

}