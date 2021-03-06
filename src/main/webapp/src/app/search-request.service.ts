import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchRequest, District } from './dtos';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
providedIn: 'root'
})
export class SearchRequestService {
  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  getSearchRequestList(): Observable<SearchRequest[]> {
    return this.http.get<SearchRequest[]>(`${this.baseUrl}/findAll`);
  }

  create(searchRequest: SearchRequest): Observable<SearchRequest> {
    return this.http.post<SearchRequest>(`${this.baseUrl}/create`, searchRequest, httpOptions);
  }

  getDistrictsList(): Observable<District[]> {
    return this.http.get<District[]>(`${this.baseUrl}/allDistricts`);
  }
}
