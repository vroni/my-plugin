import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormControl}   from '@angular/forms';
import {Router} from'@angular/router';

import { SearchRequestService } from '../search-request.service';
import { SearchRequest, District } from '../dtos';

@Component({
  selector: 'app-search-request-create',
  templateUrl: './search-request-create.component.html',
  styleUrls: ['./search-request-create.component.css']
})
export class SearchRequestCreateComponent implements OnInit {

  districtsList: Observable<District[]>;
  districts = new FormControl();
  selectedOptions: District[] = [];

  constructor(private searchRequestService: SearchRequestService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
    this.districts.valueChanges.subscribe(district=>{
                                              this.selectedOptions = district;
                                            });
  }

  reloadData() {
    this.districtsList = this.searchRequestService.getDistrictsList();
  }

  add(firstName: string, lastName: string, email: string, appartmentSize: number, appartmentRent: number): void {
    const searchRequest: SearchRequest = {id: null,
                                          firstName: firstName,
                                          lastName: lastName,
                                          email: email,
                                          appartmentSize: appartmentSize,
                                          appartmentRent: appartmentRent,
                                          districts: this.selectedOptions}

    // navigate to start page after saving new entry
    this.searchRequestService.create(searchRequest).subscribe(() =>
        this.router.navigate(['/']));
  }
}
