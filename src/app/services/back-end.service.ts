// import { HttpRequestInterceptor } from './http-request-interceptor.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Config, AString } from './../models/config';

@Injectable()
export class BackEndService {
  results: object;
  urlBase = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }

  getInfo(fName: string): object {
    const FUrl = this.urlBase + fName;
    // Make the HTTP request:
    this.http.get<AString>(FUrl);
    return this.results;
  }

}
