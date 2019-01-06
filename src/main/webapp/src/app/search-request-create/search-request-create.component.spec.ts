import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRequestCreateComponent } from './search-request-create.component';

describe('SearchRequestCreateComponent', () => {
  let component: SearchRequestCreateComponent;
  let fixture: ComponentFixture<SearchRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
