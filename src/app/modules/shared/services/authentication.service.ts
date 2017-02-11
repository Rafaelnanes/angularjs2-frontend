import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppSettings } from './index';
import { GlobalService } from './global.service';
import { DefaultHttp } from './../utils/default-http.service';
import { User } from './../models/user';

@Injectable()
export class AuthenticationService {

    constructor(private router: Router, private global: GlobalService, public defaultHtt: DefaultHttp) {
    }

    public login(user: User): Promise<Response> {
        return this.defaultHtt.post('login', user)
            .then(response => {
                let result: Headers = response.headers;
                let token: string = result.get(AppSettings.TOKEN_HEADER);
                let tokenDecoded = atob(token).split("//");
                let roles: string = tokenDecoded[0];
                localStorage.setItem(AppSettings.CURRENT_USER, user.username);
                localStorage.setItem(AppSettings.TOKEN_HEADER, tokenDecoded[1]);
                localStorage.setItem(AppSettings.CURRENT_USER_PERMISSIONS, roles);
                this.global.logUser();
                return response;
            });
    }


    public logout(): void {
        localStorage.clear();
        this.global.removeUserSession();
        this.router.navigate(['/login']);
    }

}