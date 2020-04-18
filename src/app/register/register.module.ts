import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';


@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports: [
    RegisterComponent
  ],
  declarations: [
    RegisterComponent 
 ],
  providers: [
  ],
})
export class RegisterModule { }