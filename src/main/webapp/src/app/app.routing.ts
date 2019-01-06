import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRequestListComponent } from './search-request-list/search-request-list.component';

const routes : Routes = [
  {
  path:  '',
  component:  SearchRequestListComponent
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
