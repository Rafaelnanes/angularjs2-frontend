import { Injectable } from '@angular/core';

import { AppSettings } from './appSettings';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    login(): void {
        
        this.isLoggedIn = false;
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}