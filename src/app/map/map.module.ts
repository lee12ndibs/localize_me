import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYb_Ku6cIWkJnHib3-U-UqG_AC85egr2I'
      
    })
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