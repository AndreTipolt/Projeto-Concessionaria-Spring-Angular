import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutomovelComponent } from './add-automovel.component';

describe('AddAutomovelComponent', () => {
  let component: AddAutomovelComponent;
  let fixture: ComponentFixture<AddAutomovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAutomovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAutomovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
