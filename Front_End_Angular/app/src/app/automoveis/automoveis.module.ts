import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { AutomoveisRoutingModule } from './automoveis-routing.module';
import { ListAutomoveisComponent } from './components/list-automoveis/list-automoveis.component';
import { PageAutomoveisComponent } from './components/page-automoveis/page-automoveis.component';


@NgModule({
  declarations: [
    PageAutomoveisComponent,
    ListAutomoveisComponent
  ],
  imports: [
    CommonModule,
    AutomoveisRoutingModule,
    SharedModule,
    MatTableModule,
    MatSnackBarModule
  ]
})
export class AutomoveisModule { }
