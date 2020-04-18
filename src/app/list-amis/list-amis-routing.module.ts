import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAmisComponent } from './list-amis.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', component: ListAmisComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAmisRoutingModule { }
