import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from 'src/app/modelViews/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent  {

  public formGroup: FormGroup;
  tiposDocumento : any[]=
  [
    {value:"DNI",       mask: "9*", length: 8},
    {value:"CE",        mask: "A*", length: 9},
    {value:"Pasaporte", mask: "9*", length: 9}
  ];

  public mascaraNumeroDocumento:string = "";
  public longitudNumeroDocumento:number = 0;
  
  public customPatterns = { 'z': { pattern: new RegExp('^[a-zA-Z ñÑáéíóúÁÉÍÓÚ‘,.]*$')} }; ///^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g

  constructor(
    private formBuilder: FormBuilder, 
    private clientesService: ClientesService,
    private snackBar:MatSnackBar,
    public matDialogRef: MatDialogRef<RegistroClienteComponent>)
  {
    this.formGroup = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['',[Validators.required]],
      nacionalidad: ['',[Validators.required]],
      tipoDocumento: ['',[Validators.required]],
      numeroDocumento: ['',[Validators.required]],
    });

    this.formGroup.controls["tipoDocumento"].valueChanges.subscribe(tipoDocumentoValue => {
      const tipoDocumento = this.tiposDocumento.find(t => t.value == tipoDocumentoValue);
      this.mascaraNumeroDocumento = tipoDocumento?.mask ?? "";
      this.longitudNumeroDocumento = tipoDocumento?.length ?? "";
    })
  }

   submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      var cliente =  this.formGroup.value;
      const resultado = this.clientesService.add(cliente);
      if(resultado){
        this.snackBar.open("Cliente registrado con exito", "Entendido",{duration: 4000});
      }else{
        this.snackBar.open("No se pudo registrar el cliente", "Entendido",{duration: 4000, panelClass: 'error'});
      }
      this.matDialogRef.close();
    }
    else{
      this.snackBar.open("Faltan campos por completar", "Entendido",{duration: 5000});
    }
  }

}
