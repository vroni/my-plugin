import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchRequest, District } from './dtos';

import { SearchRequestService } from './search-request.service';

const mockResponse = {
  data: [
    {firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'bruce@wayne-enterprise.com',
    appartmentSize: 230,
    appartmentRent: 2500,
    districts: []}
  ]
};

describe('SearchRequestService', () => {
  let httpClient: HttpClientTestingModule;
  let httpTestingController: HttpTestingController;
  let searchRequestService: SearchRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchRequestService]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClientTestingModule);
    httpTestingController = TestBed.get(HttpTestingController);
    searchRequestService = TestBed.get(SearchRequestService);
  });

  it('should be created', inject([SearchRequestService], (service: SearchRequestService) => {
    expect(service).toBeTruthy();
  }));

  it('can test HttpClient.get', () => {
    inject([SearchRequestService], (injectService: SearchRequestService) => {

      // Make an HTTP GET request
      this.injectService.getSearchRequestList()
        .subscribe(result =>
        // When observable resolves, result should match test data
        expect(result).toEqual(this.data)
      );

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const req = httpTestingController.expectOne('/findAll');

      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');

      // Finally, assert that there are no outstanding requests.
      httpTestingController.verify();
    })
  });


});
