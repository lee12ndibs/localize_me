import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';


@NgModule({
  imports: [
    CommonModule,
    UpdateRoutingModule,
    ReactiveFormsModule,
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