import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component'; 
import { ViewComponent } from './clientes/view/view.component'; 
import { ActualizacionComponent } from './clientes/actualizacion/actualizacion.component'; 
import { CrearComponent } from './clientes/crear/crear.component'; 

import { SolicitudesComponent } from './solicitudes/solicitudes.component'; 
import { CrearsolicitudComponent } from './solicitudes/crearsolicitud/crearsolicitud.component'; 
import { ViewsolicitudComponent } from './solicitudes/viewsolicitud/viewsolicitud.component'; 
import { ActualizarComponent } from './solicitudes/actualizar/actualizar.component'; 

import {PagosComponent} from './pagos/pagos.component';
import { CrearpagoComponent } from './pagos/crearpago/crearpago.component'; 
import { ViewpagoComponent } from './pagos/viewpago/viewpago.component';

import {PrestamosComponent} from './prestamos/prestamos.component';
import { ViewprestamoComponent } from './prestamos/viewprestamo/viewprestamo.component'; 
import { RespuestaComponent } from './respuesta/respuesta.component'; 

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'view', component: ViewComponent } ,
  { path: 'actualizacionCliente', component: ActualizacionComponent } ,
  { path: 'crearCliente', component: CrearComponent } ,
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'viewSolicitud', component: ViewsolicitudComponent } ,
  { path: 'actualizacioSolicitud', component: ActualizarComponent } ,
  { path: 'crearSolicitud', component: CrearsolicitudComponent } ,
  { path: 'pagos', component: PagosComponent },
  { path: 'viewPago', component: ViewpagoComponent } ,
  { path: 'crearPago', component: CrearpagoComponent } ,
  { path: 'prestamos', component: PrestamosComponent },
  { path: 'viewPrestamos', component: ViewprestamoComponent } ,
  { path: 'respuesta', component: RespuestaComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
