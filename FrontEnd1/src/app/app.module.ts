import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { CapacitacionesComponent } from './components/capacitaciones/capacitaciones.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { DistincionesComponent } from './components/distinciones/distinciones.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    TrayectoriaComponent,
    EducacionComponent,
    HabilidadesComponent,
    CapacitacionesComponent,
    ProyectosComponent,
    DistincionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
