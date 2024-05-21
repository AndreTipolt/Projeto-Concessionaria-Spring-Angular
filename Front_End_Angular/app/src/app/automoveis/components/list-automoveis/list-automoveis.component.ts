import { Component, OnInit } from '@angular/core';
import { AutomovelDTORes } from '../../types/res/AutomovelDTORes.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-automoveis',
  templateUrl: './list-automoveis.component.html',
  styleUrls: ['./list-automoveis.component.scss']
})
export class ListAutomoveisComponent implements OnInit {

  displayedColumns: string[] = ['modelo', 'marca', 'cor', 'ano', 'placa', 'actions']
  dataSource = new MatTableDataSource<AutomovelDTORes>();
  constructor() { }

  ngOnInit(): void {
  }

}
