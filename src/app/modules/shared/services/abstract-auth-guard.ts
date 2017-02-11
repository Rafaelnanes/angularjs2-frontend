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
}