import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registro-cliente-modal',
  templateUrl: './registro-cliente-modal.component.html',
  styleUrls: ['./registro-cliente-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroClienteModalComponent  {

  constructor(public matDialogRef: MatDialogRef<RegistroClienteModalComponent>) { }

  

}
