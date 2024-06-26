import { AutomovelDTOReq } from './../types/req/AutomovelDTOReq.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AutomovelDTORes } from '../types/res/AutomovelDTORes.interface';

@Injectable({
  providedIn: 'root'
})
export class ListAutomoveisService {

  private readonly BASE_API_URL = environment.baseAPIURL

  constructor(private httpClient: HttpClient) { }

  findAllAutomoveis() {

    const APIURL = encodeURI(`${this.BASE_API_URL}/automoveis/findAll`)

    return this.httpClient.get<AutomovelDTORes[]>(APIURL);
  }

  deleteAutomovelById(idAutomovel: string) {

    const APIURL = encodeURI(`${this.BASE_API_URL}/automoveis/${idAutomovel}`)

    return this.httpClient.delete(APIURL);
  }

  saveAutomovelById(automovelDTOReq: AutomovelDTOReq) {

    const APIURL = encodeURI(`${this.BASE_API_URL}/automoveis/save`)

    return this.httpClient.post(APIURL, automovelDTOReq);
  }
}
