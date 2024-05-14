import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule, MatSelect, MatInput, MatButton, MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, Subscription, BehaviorSubject } from '../../../../node_modules/rxjs';
import { HttpEvent, HttpRequest, HttpClient, HttpResponse } from '../../../../node_modules/@angular/common/http';
import { DatePipe, Location } from '@angular/common';
import { PagosService } from '../pagos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import swal from'sweetalert2';
@Component({
  selector: 'app-crearpago',
  templateUrl: './crearpago.component.html',
  styleUrls: ['./crearpago.component.css']
})
export class CrearpagoComponent implements OnInit {

 
  solicitudKey;
  clienteKey;
  monto;
  plazo;
  tasa='1';
  estado;
  
  constructor(private SolicitudService: PagosService, @Inject(MAT_DIALOG_DATA) public data: any,
    public HttpClient: HttpClient,private fb: FormBuilder,  private _location: Location, private datePipe : DatePipe,
    private router: Router,private route:ActivatedRoute,public dialogRef: MatDialogRef<CrearpagoComponent>
  ) { 
    this.clienteKey=data.prestamokey;
 

  }

  solicitudN;
  
  ngOnInit() {
    console.log(this.clienteKey);
    this.getPago(this.clienteKey);
  }

  
 

  Crearsolicitud(){

      let solicitud={
        prestamokey:this.clienteKey,
        montopagado:this.pagos.montopagado,
        interescobrado:this.pagos.interescobrado
       }

       console.log("pagamos")
       if(solicitud.montopagado==0 && solicitud.interescobrado==0){
        this.savesolicitud(solicitud);
        
       }else{


       }
       

  }

  pagos;
  total;
  getPago(solicitud){
    console.log(solicitud)
    this.SolicitudService.getPago(this.clienteKey).subscribe(
      data=>{
        console.log(data);
        this.pagos=data;
        this.total=this.pagos.montopagado+ this.pagos.interescobrado;
      })
  }
  
  savesolicitud(solicitud){
    console.log(solicitud)
    this.SolicitudService.inssolicitud(solicitud).subscribe(
      data=>{
        if(data.pagokey!=null){
          console.log("rsssssssss"+data.msj);
         swal.fire("Pago  Registrado con Exito", data.solicitudKey, "success");
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

