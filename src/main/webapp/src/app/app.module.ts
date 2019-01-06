import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatSelectModule, MatInputModule, MatButtonModule, MatCardModule, MatDividerModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchRequestListComponent } from './search-request-list/search-request-list.component';
import { AppRoutingModule } from  './app.routing';
import { SearchRequestCreateComponent } from './search-request-create/search-request-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchRequestListComponent,
    SearchRequestCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
