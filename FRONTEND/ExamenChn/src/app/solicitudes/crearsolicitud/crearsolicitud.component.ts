import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule, MatSelect, MatInput, MatButton, MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, Subscription, BehaviorSubject } from '../../../../node_modules/rxjs';
import { HttpEvent, HttpRequest, HttpClient, HttpResponse } from '../../../../node_modules/@angular/common/http';
import { DatePipe, Location } from '@angular/common';
import { SolicitudService } from '../solicitud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import swal from'sweetalert2';
@Component({
  selector: 'app-crearsolicitud',
  templateUrl: './crearsolicitud.component.html',
  styleUrls: ['./crearsolicitud.component.css']
})
export class CrearsolicitudComponent implements OnInit {

  
  solicitudKey;
  clienteKey;
  monto;
  plazo;
  tasa='1';
  estado;
  
  constructor(private SolicitudService: SolicitudService, @Inject(MAT_DIALOG_DATA) public data: any,
    public HttpClient: HttpClient,private fb: FormBuilder,  private _location: Location, private datePipe : DatePipe,
    private router: Router,private route:ActivatedRoute,public dialogRef: MatDialogRef<CrearsolicitudComponent>
  ) { 
    this.clienteKey=data;
    console.log(data)

  }

  solicitudN;
  
  ngOnInit() {
      
  }

  
 

  Crearsolicitud(){

      let solicitud={
        solicitudkey:this.solicitudKey,
        clientekey:this.clienteKey,
        montosolicitado:this.monto,
        plazosolicitado:this.plazo,
        tasainteres:"1",
        estado:1
       }
       this.savesolicitud(solicitud);

  }

  
  savesolicitud(solicitud){
    console.log(solicitud)
    this.SolicitudService.inssolicitud(solicitud).subscribe(

      data=>{
        console.log(data)
        if(data.solicitudkey!=null){
          console.log("rsssssssss"+data.msj);
         swal.fire("Solicitud  Creada", data.solicitudKey, "success");
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
