import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
    ano: new FormControl<string | null>('', [Validators.min(3), Validators.max(100), Validators.required]),
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  getErrorMessage(fieldName: string) {

    const field = this.formAdicionarAutomovel.get(fieldName);

    if (field?.hasError('required')) return "Campo obrigatório";

    if (field?.hasError('email')) return "Email Inválido";

    return "Erro";
  }

  onSubmit() {

  }
}
