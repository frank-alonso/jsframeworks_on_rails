import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  apiEndPoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';


  getData() {
    return this.http.get(this.apiEndPoint);
  }
}