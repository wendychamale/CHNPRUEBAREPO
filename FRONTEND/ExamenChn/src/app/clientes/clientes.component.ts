import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ClienteService } from '../clientes/cliente.service';
import { DatePipe, Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { ViewComponent } from './view/view.component';
import { MatTableDataSource, MatSort, MatPaginator ,MatDialog } from '@angular/material';
import { HttpEvent, HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { ActualizacionComponent } from './actualizacion/actualizacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CrearComponent } from './crear/crear.component';
import { SolicitudesComponent } from '../solicitudes/solicitudes.component';
import { CrearsolicitudComponent } from '../solicitudes/crearsolicitud/crearsolicitud.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  cliente: FormGroup;
  floatLabelControl = new FormControl('never');
  clientes;
  idEstado = 1;
  session;
  constantes;
  selected;
  filteredOptions: Observable<any[]>;
  filteredOptionsTipo: Observable<any[]>;
  filtered: Observable<any[]>[];
  dataSource = new MatTableDataSource<any>();

  constructor(private ClienteService: ClienteService, public HttpClient: HttpClient, private fb: FormBuilder, private _location: Location, private datePipe: DatePipe,
    private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cliente = this.fb.group({
      floatLabel: this.floatLabelControl,
      busqueda: [''],
      selEstados: ['']
    });
    this.route.params.subscribe(
      (params: Params) => {
        // this.idEstado = params.id;
        this.selected = '';
        this.filteredOptions = of([]);
        this.loadclientes();
      }
    );
  }


  loadclientes() {


    this.ClienteService.getclientes().subscribe(
      data => {
        if (data.length > 0) {
          this.clientes = data;
          console.log(this.clientes);
        } else {
          //swal("clientes Nominales", "No se han encontrado clientes", "info")
        }

        this.dataSource = new MatTableDataSource(this.clientes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  filterMatTable(filterValue: any) {
    this.dataSource.filter = filterValue;
  }

  viewcliente(item): void {
          this.modalcliente(item);
          

  }

  actualizar(item): void {
    this.modalclienteA(item);
  }

  
  crear(item): void {
    this.modalclienteCrear(item);
  }

  insertarS(item): void {
    this.modalsolicitudCrear(item);
  }

  modalcliente(dataDep) {
console.log(dataDep);
    const dialogRef = this.dialog.open(ViewComponent, {
      width: '800px',
      height: '400',
      data: dataDep
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

  eliminar(data) {


    this.ClienteService.deleteClientebyId(data).subscribe(
      data => {
        if (data.length > 0) {
          this.clientes = data;
          console.log(this.clientes);
        } else {
          //swal("clientes Nominales", "No se han encontrado clientes", "info")
        }

        this.dataSource = new MatTableDataSource(this.clientes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }


  modalclienteA(dataDep) {
    console.log(dataDep);
        const dialogRef = this.dialog.open(ActualizacionComponent, {
          width: '800px',
          height: '400',
          data: dataDep
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
    
      }
    
      
  modalclienteCrear(dataDep) {
    console.log(dataDep);
        const dialogRef = this.dialog.open(CrearComponent, {
          width: '800px',
          height: '400',
          data: dataDep
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
    
      }

            
  modalsolicitudCrear(dataDep) {
    console.log(dataDep);
        const dialogRef = this.dialog.open(CrearsolicitudComponent, {
          width: '800px',
          height: '400',
          data: dataDep
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
    
      }
    
  }