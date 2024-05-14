import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatePipe, Location } from '@angular/common';
import { ClienteService } from '../cliente.service';


interface Filex extends Blob {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  webkitRelativePath: string;
  observ: string;
}

interface Funcionalidad {
  value: string;
  viewValue: string;
}

interface Conector {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  
  floatLabelControl = new FormControl('never');
  nomArchivo;
  idDependencia;
  obsVig;
  
  constructor(private ClienteService: ClienteService, public dialogRef: MatDialogRef<ViewComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private datePipe : DatePipe) { 
    console.log(  data);
    this.idDependencia = data.clientekey;
  }

  ngOnInit() {
    console.log(  this.idDependencia);
  }
  accept = '*'
  files: Filex[] = []
  progress: number
  hasBaseDropZoneOver: boolean = false
  lastFileAt: Date

  sendableFormData: FormData//populated via ngfFormData directive 

  
  onNoClick(): void {
    this.dialogRef.close();
  } 

   
}
