import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistroClienteModalComponent } from './registro-cliente-modal/registro-cliente-modal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskModule } from 'ngx-mask';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

// const routes = [
//   {
//       path: '',
//       component: RegistroClienteComponent
//   }
// ];

@NgModule({
  declarations: [
    RegistroClienteComponent,
    RegistroClienteModalComponent
  ],
  exports: [
    RegistroClienteComponent,
    RegistroClienteModalComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    NgxMaskModule.forRoot(),
    MatSnackBarModule,
    MatIconModule
  ]
})
export class RegistroClienteModule { }
