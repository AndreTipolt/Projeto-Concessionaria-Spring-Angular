import { Component, OnInit } from '@angular/core';
import { AutomovelDTORes } from '../../types/res/AutomovelDTORes.interface';
import { MatTableDataSource } from '@angular/material/table';
import { ListAutomoveisService } from '../../services/list-automoveis.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-automoveis',
  templateUrl: './list-automoveis.component.html',
  styleUrls: ['./list-automoveis.component.scss']
})
export class ListAutomoveisComponent implements OnInit {

  displayedColumns: string[] = ['modelo', 'marca', 'cor', 'ano', 'placa', 'actions']
  dataSource = new MatTableDataSource<AutomovelDTORes>();
  constructor(private listAutomoveisService: ListAutomoveisService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.searchAutomoveis()
  }

  searchAutomoveis() {

    this.listAutomoveisService.findAllAutomoveis().subscribe({
      next: (listAutomoveis: AutomovelDTORes[]) => {

        if(listAutomoveis) {
          this.dataSource.data = listAutomoveis;
        }
      },

      error: (error: HttpErrorResponse) => {

        if(error.status == 500 || error.status == 404) {

          this.openSnackBar("Erro ao buscar automoveis")
        }
      }
    })
  }

  openSnackBar(message: string) {

    this.snackBar.open(message, "Fechar");
  }

}