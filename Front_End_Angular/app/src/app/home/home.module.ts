import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageVendaComponent } from './components/page-venda/page-venda.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageVendaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
