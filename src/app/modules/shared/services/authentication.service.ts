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

    public login(username: string, password: string): Promise<Response> {
        this.global.loading = true;
        return this.http.post(AppSettings.BASE_URL + 'login', JSON.stringify({ username: username, password: password }))
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
                return null;
            }).catch(response => {
                this.global.loading = false;
                return Promise.reject(response);
            });
    }

    public logout(): void {
        localStorage.clear();
        this.global.removeUserSession();
        this.router.navigate(['/login']);
    }

}