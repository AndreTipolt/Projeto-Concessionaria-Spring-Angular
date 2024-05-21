import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomoveisRoutingModule } from './automoveis-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAutomoveisComponent } from './components/page-automoveis/page-automoveis.component';


@NgModule({
  declarations: [
    PageAutomoveisComponent
  ],
  imports: [
    CommonModule,
    AutomoveisRoutingModule,
    SharedModule
  ]
})
export class AutomoveisModule { }
