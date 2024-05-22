import { TestBed } from '@angular/core/testing';

import { ListClientesService } from './list-clientes.service';

describe('ListClientesService', () => {
  let service: ListClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
