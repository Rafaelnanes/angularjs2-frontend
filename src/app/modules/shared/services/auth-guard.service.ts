import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppSettings } from './appSettings';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem(AppSettings.CURRENT_USER)) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}