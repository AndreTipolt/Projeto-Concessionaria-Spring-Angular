import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)},
  {path: 'automoveis', loadChildren: () => import('./automoveis/automoveis.module').then(m => m.AutomoveisModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
