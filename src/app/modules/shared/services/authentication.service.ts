import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppSettings } from './appSettings';

@Injectable()
export class AuthenticationService {
    public token: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http, private router: Router) {
        var currentUser = JSON.parse(localStorage.getItem(AppSettings.CURRENT_USER));
        this.token = currentUser && currentUser.token;
    }

    public login(username: string, password: string): void {
        this.http.post('http://localhost:8080/login', JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .toPromise()
            .then(response => {
                let result: Headers = response.headers;
                let token: string = result.get(AppSettings.TOKEN_HEADER);
                this.token = token;
                localStorage.setItem(AppSettings.CURRENT_USER, JSON.stringify({ username: username, token: token }));
                this.router.navigate(['/main']);
            }).catch(this.handleError);
    }

    public logout(): void {
        this.token = null;
        localStorage.removeItem(AppSettings.CURRENT_USER);
        this.router.navigate(['/login']);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}