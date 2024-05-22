import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ClienteDTORes } from '../../types/res/ClienteDTORes.interface';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddClienteComponent } from '../add-cliente/add-cliente.component';
import { MatPaginator } from '@angular/material/paginator';
import { ListClientesService } from '../../services/list-automoveis.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['modelo', 'marca', 'cor', 'ano', 'placa', 'preco', 'actions']
  dataSource = new MatTableDataSource<ClienteDTORes>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @Output() eventDeleteCliente = new EventEmitter<string>();

  constructor(private listClientesService: ListClientesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searchClientes()
  }

  searchClientes() {

    this.listClientesService.findAllClientes().subscribe({
      next: (listClientes: ClienteDTORes[]) => {

        if (listClientes) {
          this.dataSource.data = listClientes;
        }
      },

      error: (error: HttpErrorResponse) => {

        if (error.status == 500 || error.status == 404) {

          this.openSnackBar("Erro ao adicionar cliente")
        }
      }
    })
  }

  openSnackBar(message: string) {

    this.snackBar.open(message, "Fechar");
  }

  deleteCliente(idCliente: string) {


    const dialog = this.openConfirmationDialog("Deseja deletar esse automóvel? ")

    dialog.afterClosed().subscribe({
      next: (result) => {

        if (result) {
          this.eventDeleteCliente.emit(idCliente);
        }
      }
    })
  }

  openConfirmationDialog(message: string) {

    return this.dialog.open(ConfirmationDialogComponent, {
      data: message
    });
  }

  adicionarCliente() {

    this.dialog.open(AddClienteComponent, {
      width: '80%'
    })
  }
}
