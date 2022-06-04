import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { Cliente } from 'src/app/modelViews/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

import { GestionClientesComponent } from './gestion-clientes.component';

describe('GestionClientesComponent', () => {
  let component: GestionClientesComponent;
  let fixture: ComponentFixture<GestionClientesComponent>;
  let addClientBtn: HTMLButtonElement;
  let service: ClientesService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionClientesComponent ],
      imports: [
        MatDialogModule,
        MatSnackBarModule,
      ]
    })
    .compileComponents();
   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
