import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ListAutomoveisService } from '../../services/list-automoveis.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-automoveis',
  templateUrl: './page-automoveis.component.html',
  styleUrls: ['./page-automoveis.component.scss']
})
export class PageAutomoveisComponent implements OnInit {

  constructor(private title: Title,
    private listAutomoveisService: ListAutomoveisService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Automóveis")
  }

  onDeleteAutomovel(idAutomovel: string) {

    this.listAutomoveisService.deleteAutomovelById(idAutomovel).subscribe({
      next: (result) => {

          window.location.reload();
      },

      error: (error: HttpErrorResponse) => {

        if(error.status == 400 || error.status == 500) {

          this.openSnackBar("Erro ao deletar automóvel")
        }
      }
    })
  }

  openSnackBar(message: string) {

    this.snackBar.open(message, "Fechar");
  }

}
