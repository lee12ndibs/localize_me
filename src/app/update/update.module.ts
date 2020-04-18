import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';


@NgModule({
  imports: [
    CommonModule,
    UpdateRoutingModule
  ],
  exports: [
    UpdateComponent
  ],
  declarations: [
    UpdateComponent 
 ],
  providers: [
  ],
})
export class UpdateModule { }