import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatePipe, Location } from '@angular/common';
import { ClienteService } from '../cliente.service';
import { RespuestaComponent } from 'src/app/respuesta/respuesta.component';
import { Router, ActivatedRoute } from '@angular/router';
import swal from'sweetalert2';

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
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.component.html',
  styleUrls: ['./actualizacion.component.css']
})
export class ActualizacionComponent implements OnInit {

  floatLabelControl = new FormControl('never');
  idCliente;
  clientes;
  
  constructor(    private router: Router,private ClienteService: ClienteService, public dialogRef: MatDialogRef<ActualizacionComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private datePipe : DatePipe,public dialog: MatDialog) { 
    console.log(  data);
    this.idCliente = data;

  }

  ngOnInit() {
    console.log(  this.idCliente);
    this.loadcliente(this.idCliente);

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


  loadcliente(id) {

    console.log(id);
    this.ClienteService.getClientebyId(id).subscribe(
      data => {
        console.log(data)
          this.clientes = data;
          console.log(this.clientes);
    
      });
  }

  parseDate(dateString: any): any {
    if (dateString) {        
        return this.datePipe.transform(dateString, 'dd-MM-yyyy')
    } else {
        return null;
    }
  }
  updateCliente(){
    let cliente={
      clientekey: this.clientes.clienteKey,
      nombre: this.clientes.nombre,
      apellido: this.clientes.apellido ,
      cui: this.clientes.cui,
      direccion:this.clientes.direccion,
      correo: this.clientes.correo,
      telefono: this.clientes.telefono,
      fechaNac: this.datePipe.transform(this.clientes.fechaNac, 'dd/MM/yyyy')
      }    
 
      console.log(cliente);
    this.ClienteService.updateCliente(cliente).subscribe(
      data=>{
        if(data.clienteKey!=null){
          console.log("actualizado todo");
         swal.fire("Cliente Actualizado", data.msj, "success")
         this.onNoClick();
       // this.router.navigate(['clientes']);

        }else{
         swal.fire("Error", data.msj, "error")
       }
      })
  }


}
