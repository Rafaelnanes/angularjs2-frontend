import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppSettings } from './../index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { GlobalService } from './../services/global.service';

@Injectable()
export class DefaultHttp {

    protected headers: Headers;

    constructor(private http: Http, private router: Router, public globalService: GlobalService) {
    }

    public post(url: string, object: any): Promise<Response> {
        this.setDefaultHeaders();
        return this.interceptPromise(this.http.post(AppSettings.BASE_URL + url, JSON.stringify(object), { headers: this.headers }).toPromise());;
    };

    public put(url: string, object: any): Promise<Response> {
        this.setDefaultHeaders();
        return this.interceptPromise(this.http.put(AppSettings.BASE_URL + url, JSON.stringify(object), { headers: this.headers }).toPromise());
    };

    public get(url: string): Promise<Response> {
        this.setDefaultHeaders();
        return this.interceptPromise(this.http.get(AppSettings.BASE_URL + url, { headers: this.headers }).toPromise());
    };

    public delete(url: string): Promise<Response> {
        this.setDefaultHeaders();
        return this.interceptPromise(this.http.delete(AppSettings.BASE_URL + url, { headers: this.headers }).toPromise());
    };

    private interceptPromise(promise: Promise<Response>): Promise<Response> {
        this.globalService.loading = true;
        promise.then(response => {
            this.globalService.loading = false;
            return response;
        }).catch(response => {
            this.globalService.loading = false;
            return response;
        });
        return promise;
    }

    public handleError(message: string, toastr: ToastsManager, response: Response): void {
        let error = response.json();
        if(error.statusCode == 401 && !!error.statusCodeDetail){
            this.router.navigate(['/login', error.messages[0]]);
        }
        for (let value of error.messages) {
            toastr.error(message + ': Code: ' + error.statusCode + ", message: " + value);
        }
    }

    private setDefaultHeaders(): void {
        this.headers = new Headers();
        this.headers.append("Authorization", localStorage.getItem(AppSettings.TOKEN_HEADER));
        this.headers.append("Content-Type", "application/json");
    }
}