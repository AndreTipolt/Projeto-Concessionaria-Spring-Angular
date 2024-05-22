import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { AutomoveisRoutingModule } from './automoveis-routing.module';
import { AddAutomovelComponent } from './components/add-automovel/add-automovel.component';
import { ListAutomoveisComponent } from './components/list-automoveis/list-automoveis.component';
import { PageAutomoveisComponent } from './components/page-automoveis/page-automoveis.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    PageAutomoveisComponent,
    ListAutomoveisComponent,
    AddAutomovelComponent
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
export class AutomoveisModule { }
