import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppSettings } from './../index';

@Injectable()
export class DefaultHttp{

    protected headers: Headers;

    constructor(private http: Http, private router: Router) {
        this.headers = new Headers();
        this.headers.append("Authorization", localStorage.getItem(AppSettings.TOKEN_HEADER));
        this.headers.append("Content-Type", "application/json");
    }

    public post(url:string, object:any): Promise<Response> {
        return this.http.post(AppSettings.BASE_URL + url, JSON.stringify(object), { headers: this.headers }).toPromise();
    };

    public put(url:string, object:any): Promise<Response> {
        return this.http.put(AppSettings.BASE_URL + url, JSON.stringify(object), { headers: this.headers }).toPromise();
    };

    public get(url:string): Promise<Response> { 
        return this.http.get(AppSettings.BASE_URL + url, { headers: this.headers }).toPromise();
    };

    public delete(url:string): Promise<Response> { 
        return this.http.delete(AppSettings.BASE_URL + url, { headers: this.headers }).toPromise();
    };
}