import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { AutomoveisRoutingModule } from './automoveis-routing.module';
import { ListAutomoveisComponent } from './components/list-automoveis/list-automoveis.component';
import { PageAutomoveisComponent } from './components/page-automoveis/page-automoveis.component';
import { MatDialogModule } from '@angular/material/dialog';


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
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AutomoveisModule { }
