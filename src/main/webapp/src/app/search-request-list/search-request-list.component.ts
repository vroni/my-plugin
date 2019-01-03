import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchRequestService } from '../search-request.service';
import { SearchRequest } from '../search-request';

@Component({
  selector: 'search-request-list',
  templateUrl: './search-request-list.component.html',
  styleUrls: ['./search-request-list.component.css']
})
export class SearchRequestListComponent implements OnInit {

  searchRequests: Observable<SearchRequest[]>;

  constructor(private searchRequestService: SearchRequestService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.searchRequests = this.searchRequestService.getSearchRequestList();
  }

}
