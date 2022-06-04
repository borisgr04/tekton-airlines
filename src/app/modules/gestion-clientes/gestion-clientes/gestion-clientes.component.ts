import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/modelViews/cliente';
import { MatDialog } from '@angular/material/dialog';
import { RegistroClienteModalComponent } from '../../registro-cliente/registro-cliente-modal/registro-cliente-modal.component';
import { RegistroClienteComponent } from '../../registro-cliente/registro-cliente/registro-cliente.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'nacionalidad', 'tipoDocumento', 'numeroDocumento', 'opciones'];
  clientes: Array<Cliente> = [];

  constructor(
    private clientesService: ClientesService,
    private matdialog:MatDialog,
    private snackbar:MatSnackBar
  ){ }

  ngOnInit(): void {
    this.buscarClientes();
  }

  buscarClientes(){
    this.clientes = this.clientesService.gets();
  }
  irARegistroDeCliente(){
    this.matdialog.open(RegistroClienteModalComponent,{
      panelClass: 'registro-cliente-dialog',
      width: "600px"
    }).afterClosed().subscribe(response => {
      this.buscarClientes();
    });
  }

  public puedeAgregarCliente():boolean {
    return this.clientes.length < 4;
  }

  public eliminarCliente(cliente:Cliente){
    const resultado = this.clientesService.delete(cliente);
    if(resultado){
      this.snackbar.open("Cliente eliminado con exito", "Entendido",{duration: 4000});
      this.buscarClientes();
    }else{
      this.snackbar.open("No se pudo eliminar el cliente", "Entendido",{duration: 4000, panelClass: 'error'});
    }
  }
}