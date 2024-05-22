import { environment } from 'src/environments/environment';
import { ClienteDTOReq } from './../types/req/ClienteDTOReq.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDTORes } from '../types/res/ClienteDTORes.interface';

@Injectable({
  providedIn: 'root'
})
export class ListClientesService {

  private readonly BASE_API_URL = environment.baseAPIURL

  constructor(private httpClient: HttpClient) { }

  findAllClientes() {

    const APIURL = encodeURI(`${this.BASE_API_URL}/clientes/findAll`)

    return this.httpClient.get<ClienteDTORes[]>(APIURL);
  }

  deleteClienteById(idCliente: string) {

    const APIURL = encodeURI(`${this.BASE_API_URL}/clientes/${idCliente}`)

    return this.httpClient.delete(APIURL);
  }

  saveClienteById(clienteDTOReq: ClienteDTOReq) {

    const APIURL = encodeURI(`${this.BASE_API_URL}/clientes/save`)

    return this.httpClient.post(APIURL, clienteDTOReq);
  }
}
