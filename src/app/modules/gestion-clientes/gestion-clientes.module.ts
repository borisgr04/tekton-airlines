import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RegistroClienteModule } from '../registro-cliente/registro-cliente.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

const routes = [
  {
      path: '',
      component: GestionClientesComponent
  }
];

@NgModule({
  declarations: [
    GestionClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    RegistroClienteModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule
  ]
})
export class GestionClientesModule { }
