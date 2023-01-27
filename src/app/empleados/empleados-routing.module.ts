import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadosComponent } from './crear-empleados/crear-empleados.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';

const routes: Routes = [
  {path : '', component : ListarEmpleadosComponent},
  { path: 'create-empleados', component: CrearEmpleadosComponent },
  {path : 'edit-empleado/:id', component : CrearEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
