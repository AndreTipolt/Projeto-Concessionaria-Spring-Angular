import { TestBed } from '@angular/core/testing';

import { ListAutomoveisService } from './list-automoveis.service';

describe('ListAutomoveisService', () => {
  let service: ListAutomoveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAutomoveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
