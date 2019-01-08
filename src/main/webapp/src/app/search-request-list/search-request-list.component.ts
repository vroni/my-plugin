import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Observable } from 'rxjs';

import { SearchRequestService } from '../search-request.service';
import { SearchRequest } from '../dtos';

@Component({
  selector: 'search-request-list',
  templateUrl: './search-request-list.component.html',
  styleUrls: ['./search-request-list.component.css'],
  animations: [
  trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SearchRequestListComponent implements OnInit {

  searchRequests: Observable<SearchRequest[]>;
  columnsToDisplay = ['firstName', 'lastName', 'email'];
  expandedElement: SearchRequest | null;

  constructor(private searchRequestService: SearchRequestService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.searchRequests = this.searchRequestService.getSearchRequestList();
  }
}
