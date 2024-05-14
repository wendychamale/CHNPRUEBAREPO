import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { PrestamosService } from '../prestamos/prestamos.service';
import { DatePipe, Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { ViewprestamoComponent } from './viewprestamo/viewprestamo.component';
import { MatTableDataSource, MatSort, MatPaginator ,MatDialog } from '@angular/material';
import { HttpEvent, HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewChild} from '@angular/core';
import { CrearpagoComponent } from '../pagos/crearpago/crearpago.component';
import { PagosComponent } from '../pagos/pagos.component';
@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  prestamo: FormGroup;
  floatLabelControl = new FormControl('never');
  prestamos;
  idEstado = 1;
  session;
  constantes;
  selected;
  filteredOptions: Observable<any[]>;
  filteredOptionsTipo: Observable<any[]>;
  filtered: Observable<any[]>[];
  dataSource = new MatTableDataSource<any>();

  constructor(private prestamoservice: PrestamosService, public HttpClient: HttpClient, private fb: FormBuilder, private _location: Location, private datePipe: DatePipe,
    private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.prestamo = this.fb.group({
      floatLabel: this.floatLabelControl,
      busqueda: [''],
      selEstados: ['']
    });
    this.route.params.subscribe(
      (params: Params) => {
        // this.idEstado = params.id;
        this.selected = '';
        this.filteredOptions = of([]);
        this.loadprestamos();
      }
    );
  }


  loadprestamos() {


    this.prestamoservice.getPrestamos().subscribe(
      data => {
        if (data.length > 0) {
          this.prestamos = data;
          console.log(this.prestamos);
        } else {
          //swal("prestamos Nominales", "No se han encontrado prestamos", "info")
        }

        this.dataSource = new MatTableDataSource(this.prestamos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  filterMatTable(filterValue: any) {
    this.dataSource.filter = filterValue;
  }

  viewprestamo(item): void {
    this.prestamoservice.getsolicituds(item).subscribe(
      data => {
          this.modalprestamo(data);
      });

         
          

  }
  viewprestamop(item): void {
 
          this.modalprestamop(item);
      
         
          

  }



  
  crearPago(item): void {
    this.modalprestamoCrear(item);
  }

  
  modalprestamop(dataDep) {
    console.log(dataDep);
        const dialogRef = this.dialog.open(PagosComponent, {
          width: '800px',
          height: '400',
          data: dataDep
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
    
      }
  modalprestamo(dataDep) {
console.log(dataDep);
    const dialogRef = this.dialog.open(ViewprestamoComponent, {
      width: '800px',
      height: '400',
      data: dataDep
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

      
  modalprestamoCrear(dataDep) {
    console.log(dataDep);
        const dialogRef = this.dialog.open(CrearpagoComponent, {
          width: '800px',
          height: '400',
          data: dataDep
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
    
      }

    
}
