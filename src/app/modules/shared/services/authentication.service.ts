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
import { CartGlobalService } from 'app/modules/shop/services/cart-global.service';

@Injectable()
export class AuthenticationService {

    constructor(
        private router: Router,
        private global: GlobalService,
        public defaultHtt: DefaultHttp,
        private cartGlobalService: CartGlobalService) {
    }

    public login(user: User): Promise<Response> {
        return this.defaultHtt.post('login', user)
            .then(response => {
                let result: Headers = response.headers;
                let token: string = result.get(AppSettings.TOKEN_HEADER);
                let tokenDecoded = atob(token).split("//");
                user = JSON.parse(tokenDecoded[0]);
                localStorage.setItem(AppSettings.CURRENT_USER, JSON.stringify(user));
                localStorage.setItem(AppSettings.TOKEN_HEADER, token);
                this.global.logUser();
                return response;
            });
    }


    public logout(): void {
        localStorage.removeItem(AppSettings.CURRENT_USER);
        localStorage.removeItem(AppSettings.TOKEN_HEADER);
        localStorage.removeItem(AppSettings.USER_CART);
        localStorage.removeItem("locale");
        localStorage.clear();
        this.cartGlobalService.resetCart();
        this.global.removeUserSession();
        this.router.navigate(['/login']);
    }

}