import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppSettings } from './index';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private router: Router) {
    }

    public login(username: string, password: string): void {
        this.http.post(AppSettings.BASE_URL + 'login', JSON.stringify({ username: username, password: password }))
            .toPromise()
            .then(response => {
                let result: Headers = response.headers;
                let token: string = result.get(AppSettings.TOKEN_HEADER);
                let tokenDecoded = atob(token).split("//");
                let roles:string = tokenDecoded[0];
                localStorage.setItem(AppSettings.CURRENT_USER, JSON.stringify({username: username}));
                localStorage.setItem(AppSettings.TOKEN_HEADER, tokenDecoded[1]);
                localStorage.setItem(AppSettings.CURRENT_USER_PERMISSIONS, roles);
                this.router.navigate(['/main']);
            }).catch(this.handleError);
    }

    public logout(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}