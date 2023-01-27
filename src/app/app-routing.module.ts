import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpleadosRoutingModule} from './empleados/empleados.routes'
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EmpleadosRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
