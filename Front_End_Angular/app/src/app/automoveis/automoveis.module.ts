import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomoveisRoutingModule } from './automoveis-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAutomoveisComponent } from './components/page-automoveis/page-automoveis.component';
import {MatTableModule} from '@angular/material/table';
import { ListAutomoveisComponent } from './components/list-automoveis/list-automoveis.component';


@NgModule({
  declarations: [
    PageAutomoveisComponent,
    ListAutomoveisComponent
  ],
  imports: [
    CommonModule,
    AutomoveisRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class AutomoveisModule { }
