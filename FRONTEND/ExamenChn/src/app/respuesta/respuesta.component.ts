import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatePipe, Location } from '@angular/common';
@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  mensaje
  constructor( public dialogRef: MatDialogRef<RespuestaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(  data);
    this.mensaje = data;
   }

  ngOnInit() {
  }

}
