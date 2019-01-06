import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRequestListComponent } from './search-request-list/search-request-list.component';
import { SearchRequestCreateComponent } from './search-request-create/search-request-create.component';

const routes : Routes = [
  {
  path:  '',
  component:  SearchRequestListComponent
  },
  {
  path: 'create',
  component: SearchRequestCreateComponent
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
