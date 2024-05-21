import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-automoveis',
  templateUrl: './page-automoveis.component.html',
  styleUrls: ['./page-automoveis.component.scss']
})
export class PageAutomoveisComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Automóveis")
  }

}
