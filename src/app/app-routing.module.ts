import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gestion-clientes',
    loadChildren: () => import('./modules/gestion-clientes/gestion-clientes.module').then(m => m.GestionClientesModule)
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./modules/registro-cliente/registro-cliente.module').then(m => m.RegistroClienteModule)
  },
  {
    path: '**',
    redirectTo: 'gestion-clientes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
