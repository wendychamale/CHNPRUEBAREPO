import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatePipe, Location } from '@angular/common';
import { SolicitudService } from '../solicitud.service';
import swal from'sweetalert2';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  solicitud: FormGroup;
 Observaciones;
  idCliente;
  estado;
  constructor(private SolicitudService: SolicitudService, public dialogRef: MatDialogRef<ActualizarComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private datePipe : DatePipe) { 
    console.log(  data);
    this.idCliente = data.datas;
    this.estado=data.tipo
  
  }

  ngOnInit() {
    console.log(  this.idCliente);

  }
  accept = '*'
  progress: number
  hasBaseDropZoneOver: boolean = false
  lastFileAt: Date
  
  sendableFormData: FormData//populated via ngfFormData directive 

  
  onNoClick(): void {
    this.dialogRef.close();
  } 


  aceptar(){
   
      console.log(this.idCliente);
      
      let sol={
        solicitudkey:this.idCliente,
        estado:this.estado,
        observacion:this.Observaciones
      }
      let res='';

      if(this.estado==2){
         res="Aceptada";
      }

      if(this.estado==3){
        res="Rechazada";
     }
      console.log(sol);
    this.SolicitudService.aceptar(sol).subscribe(
      data=>{
        if(data.solicitudkey!=null){
          console.log("actualizado todo");
         swal.fire("Solicitud "+res, data.solicitudkey+"", "success");
         this.onNoClick();
        }else{
         swal.fire("Error", data.msj, "error")
       }
      })
  }
}
