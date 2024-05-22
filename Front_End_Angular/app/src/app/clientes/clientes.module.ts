import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';
import { AutomoveisRoutingModule } from '../automoveis/automoveis-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { PageClientesComponent } from './components/page-clientes/page-clientes.component';


@NgModule({
  declarations: [
    PageClientesComponent,
    ListClientesComponent,
    AddClienteComponent
  ],
  imports: [
    CommonModule,
    AutomoveisRoutingModule,
    SharedModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class ClientesModule { }
