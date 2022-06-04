import { TestBed } from '@angular/core/testing';
import { Cliente } from '../modelViews/cliente';

import { ClientesService } from './clientes.service';

describe('ClientesService', () => {
  let service: ClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be add client', () => {
    service.nombreRepoLocalStorage="test-tektonlab";
    var cliente : Cliente = {
      nombre: 'Jonh',
      apellido: 'Connor',
      nacionalidad: 'Estadounidense',
      tipoDocumento: 'Cedula ciudadania',
      numeroDocumento: '1065001001',
    }
    service.add(cliente);
    var clients=service.gets();
    expect(clients.length).toBe(1);
    localStorage.removeItem(service.nombreRepoLocalStorage);
  });

  it('should not add client, you already have four records', () => {
    service.nombreRepoLocalStorage="test-tektonlab-error";
    var cliente : Cliente = {
      nombre: 'Jonh',
      apellido: 'Connor',
      nacionalidad: 'Estadounidense',
      tipoDocumento: 'Cedula ciudadania',
      numeroDocumento: '1065001001',
    }
    service.add(cliente);
    service.add(cliente);
    service.add(cliente);
    service.add(cliente);
    let result=service.add(cliente);
    let clients=service.gets();
    expect(clients.length).toBe(4);
    expect(result).toBeFalse();
    localStorage.removeItem(service.nombreRepoLocalStorage);
  });

  it('should delete client', () => {
    service.nombreRepoLocalStorage="test-tektonlab-delete";
    var cliente : Cliente = {
      nombre: 'Jonh',
      apellido: 'Connor',
      nacionalidad: 'Estadounidense',
      tipoDocumento: 'Cedula ciudadania',
      numeroDocumento: '1065001001',
    }
    service.add(cliente);
    let result=service.delete(cliente);
    var clients=service.gets();
    expect(clients.length).toBe(0);
    expect(result).toBeTrue();
    localStorage.removeItem(service.nombreRepoLocalStorage);
  });

  it('should not delete client, not found', () => {
    service.nombreRepoLocalStorage="test-tektonlab-not-delete";
    var cliente : Cliente = {
      nombre: 'Jonh',
      apellido: 'Connor',
      nacionalidad: 'Estadounidense',
      tipoDocumento: 'Cedula ciudadania',
      numeroDocumento: '1065001001',
    };
    service.add(cliente);
    var clienteToDelete : Cliente = {
      nombre: 'Jonh',
      apellido: 'Connor',
      nacionalidad: 'Estadounidense',
      tipoDocumento: 'Cedula ciudadania',
      numeroDocumento: '1065001002',
    };
    let result=service.delete(clienteToDelete);
    var clients=service.gets();
    expect(clients.length).toBe(1);
    expect(result).toBeFalse();
    localStorage.removeItem(service.nombreRepoLocalStorage);
  });
});
