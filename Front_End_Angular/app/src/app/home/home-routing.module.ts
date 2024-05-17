import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageVendaComponent } from './components/page-venda/page-venda.component';

const routes: Routes = [
  { path: '', component: PageVendaComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
