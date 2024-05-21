import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAutomoveisComponent } from './page-automoveis.component';

describe('PageAutomoveisComponent', () => {
  let component: PageAutomoveisComponent;
  let fixture: ComponentFixture<PageAutomoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAutomoveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAutomoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
