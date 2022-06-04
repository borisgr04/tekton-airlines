import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../modelViews/cliente';

@Pipe({
  name: 'filterCliente'
})
export class FilterClientePipe implements PipeTransform {

  transform(personas: Cliente[], searchText: string): Cliente[] {
    if (searchText == null) return personas;
        return personas.filter(p=> p.nombre?.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 );
    }
  }




