import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateComponent } from './update.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '',  component: UpdateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UpdateRoutingModule { }
