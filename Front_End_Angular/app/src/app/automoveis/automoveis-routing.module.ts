import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAutomoveisComponent } from './components/page-automoveis/page-automoveis.component';

const routes: Routes = [
  { path: '', component: PageAutomoveisComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomoveisRoutingModule { }
