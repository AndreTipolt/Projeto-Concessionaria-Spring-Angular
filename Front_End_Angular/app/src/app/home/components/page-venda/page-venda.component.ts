import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-venda',
  templateUrl: './page-venda.component.html',
  styleUrls: ['./page-venda.component.scss']
})
export class PageVendaComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {

    this.title.setTitle("Vendas")
  }

}
