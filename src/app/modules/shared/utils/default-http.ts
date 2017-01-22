import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppSettings, IGenericService } from './../index';

export abstract class DefaultHttp<T>{

    protected headers: Headers;

    constructor(protected http: Http, protected router: Router) {
        this.headers = new Headers();
        this.headers.append("Authorization", localStorage.getItem(AppSettings.TOKEN_HEADER));
        this.headers.append("Content-Type", "application/json");
    }

    protected post(url:string, object:T): Observable<Response> {
        return this.http.post(AppSettings.BASE_URL + url, object, { headers: this.headers });
    };

    protected put(url:string, object:T): Observable<Response> {
        return this.http.put(AppSettings.BASE_URL + url, object, { headers: this.headers });
    };

    protected get(url:string): Observable<Response> { 
        return this.http.get(AppSettings.BASE_URL + url, { headers: this.headers });
    };

    protected delete(url:string): Observable<Response> { 
        return this.http.delete(AppSettings.BASE_URL + url, { headers: this.headers });
    };
}