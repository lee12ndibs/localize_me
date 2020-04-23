import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAmisComponent } from './list-amis.component';

const routes: Routes = [
  { path: '', component: ListAmisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAmisRoutingModule { }