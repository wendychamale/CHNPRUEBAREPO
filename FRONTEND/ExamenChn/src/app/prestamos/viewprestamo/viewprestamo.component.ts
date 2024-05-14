import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatePipe, Location } from '@angular/common';
import { SolicitudService } from '../../solicitudes/solicitud.service';


@Component({
  selector: 'app-viewprestamo',
  templateUrl: './viewprestamo.component.html',
  styleUrls: ['./viewprestamo.component.css']
})
export class ViewprestamoComponent implements OnInit {

  
  nomArchivo;
  idDependencia;
  obsVig;
  solicitudes;
  
  constructor(private SolicitudService: SolicitudService, public dialogRef: MatDialogRef<ViewprestamoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private datePipe : DatePipe) { 
    console.log(  data);
    this.idDependencia = data.solicitudkey;
   // this.solicitudes = Object.values(data);
    console.log(this.idDependencia);
  }

  ngOnInit() {
    console.log(  this.idDependencia);
  }
  accept = '*'
  progress: number
  hasBaseDropZoneOver: boolean = false
  lastFileAt: Date

  sendableFormData: FormData//populated via ngfFormData directive 

  
  onNoClick(): void {
    this.dialogRef.close();
  } 
}
