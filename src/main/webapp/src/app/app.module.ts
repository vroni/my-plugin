import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SearchRequestListComponent } from './search-request-list/search-request-list.component';
import { AppRoutingModule } from  './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SearchRequestListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
