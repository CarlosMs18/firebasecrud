import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { CrearEmpleadosComponent } from './crear-empleados/crear-empleados.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { EmpleadosComponent } from './empleados.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearEmpleadosComponent,
    ListarEmpleadosComponent,
    EmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    ReactiveFormsModule,

    SharedModule
  ]
})
export class EmpleadosModule { }
