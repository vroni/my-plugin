import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormControl}   from '@angular/forms';

import { SearchRequestService } from '../search-request.service';
import { SearchRequest, District } from '../search-request';

@Component({
  selector: 'app-search-request-create',
  templateUrl: './search-request-create.component.html',
  styleUrls: ['./search-request-create.component.css']
})
export class SearchRequestCreateComponent implements OnInit {

  districtsList: Observable<District[]>;
  districts = new FormControl();
  selectedOptions: District[] = [];

  constructor(private searchRequestService: SearchRequestService) { }

  ngOnInit() {
    this.reloadData();
    this.districts.valueChanges.subscribe(district=>{
                                              this.selectedOptions = district;
                                            });
  }

  reloadData() {
    this.districtsList = this.searchRequestService.getDistrictsList();
  }

  add(firstName: string, lastName: string, email: string, appartmentSize: int; appartmentRent: int): void {
    const searchRequest: SearchRequest = {firstName: firstName,
                                          lastName: lastName,
                                          email: email,
                                          appartmentSize: appartmentSize
                                          appartmentRent: appartmentRent
                                          districts: this.selectedOptions}
    this.searchRequestService.create(searchRequest).subscribe();
  }
}
