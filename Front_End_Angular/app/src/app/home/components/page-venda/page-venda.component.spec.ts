import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVendaComponent } from './page-venda.component';

describe('PageVendaComponent', () => {
  let component: PageVendaComponent;
  let fixture: ComponentFixture<PageVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
