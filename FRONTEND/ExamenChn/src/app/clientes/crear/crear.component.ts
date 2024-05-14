import { Component, OnInit,Injector } from '@angular/core';
import { MatDatepickerModule, MatSelect, MatInput, MatButton, MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, Subscription, BehaviorSubject } from '../../../../node_modules/rxjs';
import { HttpEvent, HttpRequest, HttpClient, HttpResponse } from '../../../../node_modules/@angular/common/http';
import { DatePipe, Location } from '@angular/common';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import swal from'sweetalert2';
interface Funcionalidad {
  value: string;
  viewValue: string;
}

interface Conector {
  value: string;
  viewValue: string;
}

interface Filex extends Blob {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  webkitRelativePath: string;
  observ: string;
}
interface Filex1 extends Blob {
  lastModified: number;
  //lastModifiedDate: Date;
  name: string;
 // webkitRelativePath: string;
 // observ:string;
  
}

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  creation: FormGroup;
  constantes;
  //hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('none');

/* Controles */
  clienteKey;
  nombre;
  apellido;
  correo;
  direccion;
  telefono;
  fechaNac;;
  cui;
  constructor(private ClienteService: ClienteService,
    public HttpClient: HttpClient,private fb: FormBuilder,  private _location: Location, private datePipe : DatePipe,
    private router: Router,private route:ActivatedRoute,public dialogRef: MatDialogRef<CrearComponent>
  ) { 
  }

  clienteN;
  
  ngOnInit() {
      
  }

  
 

  CrearCliente(){

      let cliente={
        clienteKey:this.clienteKey,
        nombre:this.nombre,
        apellido:this.apellido,
        correo:this.correo,
        cui:this.cui,
        direccion:this.direccion,
        fechaNac:this.datePipe.transform(this.fechaNac, 'dd/MM/yyyy'),
        telefono:this.telefono
       }
       this.saveCliente(cliente);

  }

  
  saveCliente(Cliente){
    this.ClienteService.insCliente(Cliente).subscribe(
      data=>{
        if(data.clienteKey!=null){
          console.log("rsssssssss"+data.msj);
        swal.fire("Cliente Creado", data.nombre, "success")
         this.onNoClick();
        }else{
        swal.fire("Error", data.msj, "error")
       }
      })
  }

  
  parseDate(dateString: any): any {
    if (dateString) {        
        return this.datePipe.transform(dateString, 'dd-MM-yyyy')
    } else {
        return null;
    }
  }



  onNoClick(): void {
    this.dialogRef.close();

  } 

  getDate() {
    return new Date()
  }

 

}
