import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatSelectModule, MatInputModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchRequestListComponent } from './search-request-list.component';

describe('SearchRequestListComponent', () => {
  let component: SearchRequestListComponent;
  let fixture: ComponentFixture<SearchRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRequestListComponent ],
      imports: [MatTableModule,
                MatSelectModule,
                MatInputModule,
                MatButtonModule,
                MatCardModule,
                MatDividerModule,
                MatFormFieldModule, HttpClientTestingModule]

})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
