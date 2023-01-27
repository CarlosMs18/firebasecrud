import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { EmpleadosPost } from '../../interfaces/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit, OnDestroy {
     empleados : EmpleadosPost[] = [];
     loading : boolean  =false;

     empleadosSubs$ = new Subscription();
     constructor(
        private _empleadoService :EmpleadosService,
        private toastr : ToastrService
     ){}


      ngOnDestroy(): void {
           this.empleadosSubs$.unsubscribe();
      }

      ngOnInit(): void {
        this.obtenerListas()
      }


      obtenerListas(){
        this.loading = true;
        this.empleadosSubs$ =  this._empleadoService.obtenerEmpleados()
                .subscribe(
                  {
                    next : data => {
                      this.empleados = [];
                      this.loading = false;
                       data.forEach((element : any) => {
                            this.empleados.push({
                              id : element.payload.doc.id,
                              ...element.payload.doc.data()
                            })
                       })

                    },
                    error : err => {
                      this.loading = false;
                      this.toastr.error('Ha ocurrido un error inesperado', 'Error Message')
                    }
                  }
                )


      }

      eliminarEmpleado(idEmpledo : string){
        this.loading = true;
          this._empleadoService.eliminarEmpleados(idEmpledo)
                .then(resp => {
                  this.loading = false
                  this.toastr.success('Empleado eliminado con exito', 'Mensaje Exitoso')
                })
                .catch(err => {
                  this.loading = false;
                  this.toastr.error('Ha ocurrido un error inesperado','Mensaje de error')
                })
      }
}
