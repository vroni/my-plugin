import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  sayHello() {
    return this.http.get(`${this.url}/hello`);
  }
}
