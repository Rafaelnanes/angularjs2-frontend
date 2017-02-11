import { CanActivate, Router } from '@angular/router';
import { AppSettings } from './index';

export abstract class AbstractAuthGuard {

    constructor(protected router: Router) { }

    protected isUserLogged(): boolean {
        if (localStorage.getItem(AppSettings.CURRENT_USER)) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    protected canActivateByRole(role: string): boolean {
        let isActivate: boolean = this.isUserLogged();
        if (isActivate) {
            for (let permission of AppSettings.getUserPermissions()) {
                if (permission == role) {
                    return true;
                }
            }
            this.router.navigate(['/403']);

        }
        return isActivate;
    }
}