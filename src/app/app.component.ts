import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from './services/clientes.service';
import { Cliente } from './modelViews/cliente';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Tekton Airlines";
}
