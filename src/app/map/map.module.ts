import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing';
import { MapComponent } from './map.component';


@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule
  ],
  exports: [
    MapComponent
  ],
  declarations: [
    MapComponent 
 ],
  providers: [
  ],
})
export class MapModule { }