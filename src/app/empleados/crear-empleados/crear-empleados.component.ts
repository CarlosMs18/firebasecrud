import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadosService } from '../../services/empleados.service';
@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})
export class CrearEmpleadosComponent implements OnInit {
  empleadosForm!: FormGroup
  id!: string | null;
  titulo : string = 'Creacion Empleado'
  boton : string = 'Crear Empleado'
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private activatedRoute :ActivatedRoute,
    private toastr : ToastrService,
    private _empleadoService : EmpleadosService
  ){

    this.empleadosForm = this.fb.group({
        nombre : ['', Validators.required],
        apellido : ['',Validators.required],
        documento : ['',Validators.required],
        salario : [0,Validators.required],
    })
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.obtenerEmpleado()
  }


  obtenerEmpleado(){
    if(this.id !== null){
      this.titulo = 'Edicion Empleado';
      this.boton = 'Actualizar Empleado'
      this._empleadoService.registroEmpleadoUnico(this.id)
      .subscribe(
        {
          next :  (resp  : any)=> {
            this.empleadosForm.setValue({
              nombre : resp.payload.data()['nombre'],
              apellido: resp.payload.data()['apellido'],
              documento: resp.payload.data()['documento'],
              salario: resp.payload.data()['salario'],
                })
          }
        }
      )
    }
  }

  campoValido(campo : string){
    if(this.empleadosForm.get(campo)?.hasError('required') && this.empleadosForm.get(campo)?.touched){
      return true;
    }else{
      return false;
    }
  }


  enviarDatos(){
      if(this.empleadosForm.invalid){
        return
      }

      if(this.id == null){
        this._empleadoService.crearEmpleados(this.empleadosForm.value)
        .then((resp ) => {
           this.toastr.success('Empleado creado con exito', 'Mensaje de Exito');
           this.router.navigateByUrl('/empleados')

        })
        .catch((err) => {
          this.toastr.error('Ha ocurrido un error al crear empleado','Mensaje Error')

        } )
      }else{
        this._empleadoService.actualizarEmpleados(this.empleadosForm.value, this.id)
        .then((resp ) => {
          this.toastr.success('Empleado actualizado con exito', 'Mensaje de Exito');
          this.router.navigateByUrl('/empleados')

       })
       .catch((err) => {
         this.toastr.error('Ha ocurrido un error al actualizar empleado','Mensaje Error')

       } )
      }



  }
}
