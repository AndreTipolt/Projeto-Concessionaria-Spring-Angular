import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListClientesService } from '../../services/list-automoveis.service';

@Component({
  selector: 'app-page-clientes',
  templateUrl: './page-clientes.component.html',
  styleUrls: ['./page-clientes.component.scss']
})
export class PageClientesComponent implements OnInit {

  constructor(private title: Title,
    private listClientesService: ListClientesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Automóveis")
  }

  onDeleteCliente(idCliente: string) {

    this.listClientesService.deleteClienteById(idCliente).subscribe({
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
