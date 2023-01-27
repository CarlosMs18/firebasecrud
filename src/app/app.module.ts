import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import {AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';



import { EmpleadosModule } from './empleados/empleados.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    /* RUTAS */
    EmpleadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
