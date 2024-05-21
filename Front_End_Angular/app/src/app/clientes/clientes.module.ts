import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageClientesComponent } from './components/page-clientes/page-clientes.component';


@NgModule({
  declarations: [
    PageClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule
  ]
})
export class ClientesModule { }
