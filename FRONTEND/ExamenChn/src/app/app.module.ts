import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClientesComponent } from './clientes/clientes.component';
import { ViewComponent } from './clientes/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatInputModule } from '@angular/material/input';
import { ActualizacionComponent } from './clientes/actualizacion/actualizacion.component';
import { CrearComponent } from './clientes/crear/crear.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PagosComponent } from './pagos/pagos.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { ActualizarComponent } from './solicitudes/actualizar/actualizar.component';
import { CrearsolicitudComponent } from './solicitudes/crearsolicitud/crearsolicitud.component';
import { EditarsolicitudComponent } from './solicitudes/editarsolicitud/editarsolicitud.component';
import { ViewsolicitudComponent } from './solicitudes/viewsolicitud/viewsolicitud.component';
import { ViewpagoComponent } from './pagos/viewpago/viewpago.component';
import { CrearpagoComponent } from './pagos/crearpago/crearpago.component';
import { ViewprestamoComponent } from './prestamos/viewprestamo/viewprestamo.component';
import { RespuestaComponent } from './respuesta/respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ViewComponent,
    ActualizacionComponent,
    CrearComponent,
    SolicitudesComponent,
    PagosComponent,
    PrestamosComponent,
    ActualizarComponent,
    CrearsolicitudComponent,
    EditarsolicitudComponent,
    ViewsolicitudComponent,
    ViewpagoComponent,
    CrearpagoComponent,
    ViewprestamoComponent,
    RespuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule
    ,MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [DatePipe], 
  bootstrap: [AppComponent]
})
export class AppModule { }