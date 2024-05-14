import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { SolicitudService } from '../solicitudes/solicitud.service';
import { DatePipe, Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { ViewsolicitudComponent } from './viewsolicitud/viewsolicitud.component';
import { MatTableDataSource, MatSort, MatPaginator ,MatDialog } from '@angular/material';
import { HttpEvent, HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CrearsolicitudComponent } from '../solicitudes/crearsolicitud/crearsolicitud.component';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  solicitud: FormGroup;
  floatLabelControl = new FormControl('never');
  solicituds;
  idEstado = 1;
  session;
  constantes;
  selected;
  filteredOptions: Observable<any[]>;
  filteredOptionsTipo: Observable<any[]>;
  filtered: Observable<any[]>[];
  dataSource = new MatTableDataSource<any>();

  constructor(private solicitudService: SolicitudService, public HttpClient: HttpClient, private fb: FormBuilder, private _location: Location, private datePipe: DatePipe,
    private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.solicitud = this.fb.group({
      floatLabel: this.floatLabelControl,
      busqueda: [''],
      selEstados: ['']
    });
    this.route.params.subscribe(
      (params: Params) => {
        // this.idEstado = params.id;
        this.selected = '';
        this.filteredOptions = of([]);
        this.loadsolicituds();
      }
    );
  }


  loadsolicituds() {


    this.solicitudService.getsolicituds().subscribe(
      data => {
        if (data.length > 0) {
          // Transformar el objeto de respuesta a un array de objetos
          this.solicituds = Object.values(data);
          console.log(this.solicituds);
        } else {
          //swal("solicituds Nominales", "No se han encontrado solicituds", "info")
        }

        this.dataSource = new MatTableDataSource(this.solicituds);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  filterMatTable(filterValue: any) {
    this.dataSource.filter = filterValue;
  }

  viewsolicitud(item): void {
          this.modalsolicitud(item);
          

  }

  actualizar(item): void {
    console.log(item.solicitudkey);
    let datos={
       datas:item.solicitudkey,
       tipo:2
  }

    this.modalsolicitudA(datos);
  }

  
  rechazar(item): void {
    console.log(item.solicitudkey);
    let datos={
       datas:item.solicitudkey,
       tipo:3
  }

    this.modalsolicitudA(datos);
  }



  modalsolicitud(dataDep) {
console.log(dataDep);
    const dialogRef = this.dialog.open(ViewsolicitudComponent, {
      width: '800px',
      height: '400',
      data: dataDep
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }
  

  modalsolicitudA(dataDep) {
        console.log(dataDep)
        const dialogRef = this.dialog.open(ActualizarComponent, {
          width: '800px',
          height: '400',
          data: dataDep
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
    
      }
 

}
