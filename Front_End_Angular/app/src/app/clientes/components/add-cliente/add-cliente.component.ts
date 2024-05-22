import { HttpErrorResponse } from '@angular/common/http';
import { ClienteDTOReq } from '../../types/req/ClienteDTOReq.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListClientesService } from '../../services/list-automoveis.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit {

  formAdicionarCliente = this.formBuilder.group({

    modelo: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
    placa: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
    cor: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
    marca: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
    preco: new FormControl<number | 0>(0, [Validators.required]),
    ano: new FormControl<string | null>('', [Validators.min(2000), Validators.max(2024), Validators.required]),
  })

  constructor(private formBuilder: FormBuilder,
              private listClientesService: ListClientesService,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage(fieldName: string) {

    const field = this.formAdicionarCliente.get(fieldName);

    if (field?.hasError('required')) return "Campo obrigatório";

    return "Campo inválido";
  }

  onSubmit() {

    if(this.formAdicionarCliente.invalid){
      return;
    }

    const clienteDTO: ClienteDTOReq = {

      ano: this.formAdicionarCliente.get('ano')?.value!,
      cor: this.formAdicionarCliente.get('cor')?.value!,
      marca: this.formAdicionarCliente.get('marca')?.value!,
      modelo: this.formAdicionarCliente.get('modelo')?.value!,
      placa: this.formAdicionarCliente.get('placa')?.value!,
      preco: this.formAdicionarCliente.get('preco')?.value!
    }

    this.listClientesService.saveClienteById(clienteDTO).subscribe({
      next: (result) => {

        window.location.reload()
      },

      error: (error: HttpErrorResponse) => {
        if (error.status == 500 || error.status == 404) {

          this.openSnackBar("Erro ao buscar clientes")
        }
      }
    })
  }

  openSnackBar(message: string) {

    this.snackBar.open(message, "Fechar");
  }
}
