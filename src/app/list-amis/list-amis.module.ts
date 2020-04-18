import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAmisComponent } from './list-amis.component';
import { ListAmisRoutingModule } from './list-amis-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListAmisRoutingModule
  ],
  exports: [
    ListAmisComponent
  ],
  declarations: [
    ListAmisComponent 
 ],
  providers: [
  ],
})
export class ListAmisModule { }