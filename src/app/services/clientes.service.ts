import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelViews/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  nombreRepoLocalStorage : string = 'Tekton.Clientes';

  gets(): Array<Cliente>{
    var clientesStr = localStorage.getItem(this.nombreRepoLocalStorage);
    if(clientesStr){
      return JSON.parse(clientesStr);
    }
    else{
      return [];
    }
  }

  add(cliente:Cliente):boolean{
    var clientesRegistrados = this.gets();
    if(clientesRegistrados.length >= 4){
      return false;
    }

    clientesRegistrados.push(cliente);
    localStorage.setItem(this.nombreRepoLocalStorage, JSON.stringify(clientesRegistrados));
    return true;
  }

  delete(cliente:Cliente):boolean{
    var clientesRegistrados = this.gets();
    var clienteIndex = clientesRegistrados.findIndex(t => t.tipoDocumento == cliente.tipoDocumento && t.numeroDocumento == cliente.numeroDocumento);
    if(clienteIndex >= 0){
      clientesRegistrados.splice(clienteIndex,1);
      localStorage.setItem(this.nombreRepoLocalStorage, JSON.stringify(clientesRegistrados));
      return true;
    }
    return false;
  }
}
