import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpleadosComponent } from './empleados.component';



const routes: Routes = [
   {
    path: 'empleados' ,
    component : EmpleadosComponent ,
    loadChildren :  () => import('./empleados-routing.module').then(m => m.EmpleadosRoutingModule)
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule {}
