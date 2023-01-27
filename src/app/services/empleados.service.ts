import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { EmpleadosPost } from '../interfaces/empleados.interface';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private af : AngularFirestore
  ) { }

  crearEmpleados(empleados : EmpleadosPost) : Promise<any>{
    return this.af.collection('empleados').add(empleados)
  }

  obtenerEmpleados() : Observable<any>{
    return this.af.collection('empleados').snapshotChanges()
  }

  eliminarEmpleados(idEmpleado : string) : Promise<any>{
    return this.af.collection('empleados').doc(idEmpleado).delete()
  }


  registroEmpleadoUnico(idEmpleado : string) : Observable<any>{
    return this.af.collection('empleados').doc(idEmpleado).snapshotChanges();
  }

  actualizarEmpleados(data : EmpleadosPost , idEmpleado : string) : Promise<any>{
    return this.af.collection('empleados').doc(idEmpleado).update(data)
  }
}
