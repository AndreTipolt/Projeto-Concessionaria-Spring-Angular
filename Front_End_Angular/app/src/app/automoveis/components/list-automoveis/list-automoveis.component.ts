import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutomovelDTORes } from '../../types/res/AutomovelDTORes.interface';
import { MatTableDataSource } from '@angular/material/table';
import { ListAutomoveisService } from '../../services/list-automoveis.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-list-automoveis',
  templateUrl: './list-automoveis.component.html',
  styleUrls: ['./list-automoveis.component.scss']
})
export class ListAutomoveisComponent implements OnInit {

  displayedColumns: string[] = ['modelo', 'marca', 'cor', 'ano', 'placa', 'actions']
  dataSource = new MatTableDataSource<AutomovelDTORes>();

  @Output() eventDeleteAutomovel = new EventEmitter<string>();

  constructor(private listAutomoveisService: ListAutomoveisService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searchAutomoveis()
  }

  searchAutomoveis() {

    this.listAutomoveisService.findAllAutomoveis().subscribe({
      next: (listAutomoveis: AutomovelDTORes[]) => {

        if (listAutomoveis) {
          this.dataSource.data = listAutomoveis;
        }
      },

      error: (error: HttpErrorResponse) => {

        if (error.status == 500 || error.status == 404) {

          this.openSnackBar("Erro ao buscar automoveis")
        }
      }
    })
  }

  openSnackBar(message: string) {

    this.snackBar.open(message, "Fechar");
  }

  deleteAutomovel(idAutomovel: string) {


    const dialog = this.openConfirmationDialog("Deseja deletar esse automóvel? ")

    dialog.afterClosed().subscribe({
      next: (result) => {

        if (result) {
          this.eventDeleteAutomovel.emit(idAutomovel);
        }
      }
    })
  }

  openConfirmationDialog(message: string) {

    return this.dialog.open(ConfirmationDialogComponent, {
      data: message
    });
  }

}
