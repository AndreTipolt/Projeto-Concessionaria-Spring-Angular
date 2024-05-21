import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientesComponent } from './components/page-clientes/page-clientes.component';

const routes: Routes = [
  { path: '', component: PageClientesComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
