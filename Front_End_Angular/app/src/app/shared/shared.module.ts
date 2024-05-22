import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [HeaderComponent, ConfirmationDialogComponent]
})
export class SharedModule { }
