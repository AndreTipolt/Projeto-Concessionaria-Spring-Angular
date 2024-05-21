import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutomoveisComponent } from './list-automoveis.component';

describe('ListAutomoveisComponent', () => {
  let component: ListAutomoveisComponent;
  let fixture: ComponentFixture<ListAutomoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAutomoveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAutomoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
