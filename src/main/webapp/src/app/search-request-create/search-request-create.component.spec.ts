import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatSelectModule, MatInputModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SearchRequestCreateComponent } from './search-request-create.component';

describe('SearchRequestCreateComponent', () => {
  let component: SearchRequestCreateComponent;
  let fixture: ComponentFixture<SearchRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRequestCreateComponent ],
      imports: [MatTableModule,
                MatSelectModule,
                MatInputModule,
                MatButtonModule,
                MatCardModule,
                MatDividerModule,
                MatFormFieldModule,
                FormsModule,
                ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule]
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
