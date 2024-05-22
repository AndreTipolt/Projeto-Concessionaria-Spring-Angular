import { HttpErrorResponse } from '@angular/common/http';
import { ListAutomoveisService } from './../../services/list-automoveis.service';
import { AutomovelDTOReq } from './../../types/req/AutomovelDTOReq.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-automovel',
  templateUrl: './add-automovel.component.html',
  styleUrls: ['./add-automovel.component.scss']
})
export class AddAutomovelComponent implements OnInit {

  formAdicionarAutomovel = this.formBuilder.group({

    modelo: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
    placa: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
    cor: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
    marca: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
    preco: new FormControl<number | 0>(0, [Validators.required]),
    ano: new FormControl<string | null>('', [Validators.min(2000), Validators.max(2024), Validators.required]),
  })

  constructor(private formBuilder: FormBuilder,
              private listAutomoveisService: ListAutomoveisService,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage(fieldName: string) {

    const field = this.formAdicionarAutomovel.get(fieldName);

    if (field?.hasError('required')) return "Campo obrigatório";

    return "Campo inválido";
  }

  onSubmit() {

    if(this.formAdicionarAutomovel.invalid){
      return;
    }

    const automovelDTO: AutomovelDTOReq = {

      ano: this.formAdicionarAutomovel.get('ano')?.value!,
      cor: this.formAdicionarAutomovel.get('cor')?.value!,
      marca: this.formAdicionarAutomovel.get('marca')?.value!,
      modelo: this.formAdicionarAutomovel.get('modelo')?.value!,
      placa: this.formAdicionarAutomovel.get('placa')?.value!,
      preco: this.formAdicionarAutomovel.get('preco')?.value!
    }

    this.listAutomoveisService.saveAutomovelById(automovelDTO).subscribe({
      next: (result) => {

        window.location.reload()
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
}
