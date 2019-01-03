import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
private baseUrl = 'http://localhost:8080/';


  constructor(private http: HttpClient) { }

  getSearchRequestList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAll`);
  }
}
