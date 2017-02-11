import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppSettings } from './index';
import { GlobalService } from './global.service';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private router: Router, private global: GlobalService) {
    }

    public login(username: string, password: string): void {
        this.global.loading = true;
        this.http.post(AppSettings.BASE_URL + 'login', JSON.stringify({ username: username, password: password }))
            .toPromise()
            .then(response => {
                this.global.loading = false;
                let result: Headers = response.headers;
                let token: string = result.get(AppSettings.TOKEN_HEADER);
                let tokenDecoded = atob(token).split("//");
                let roles: string = tokenDecoded[0];
                localStorage.setItem(AppSettings.CURRENT_USER, username);
                localStorage.setItem(AppSettings.TOKEN_HEADER, tokenDecoded[1]);
                localStorage.setItem(AppSettings.CURRENT_USER_PERMISSIONS, roles);
                this.global.logUser();
                this.router.navigate(['/main']);
            }).catch(this.handleError);
    }

    public logout(): void {
        localStorage.clear();
        this.global.removeUserSession();
        this.router.navigate(['/login']);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        this.global.loading = false;
        return Promise.reject(error.message || error);
    }
}