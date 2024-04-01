import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEmpleadosComponent } from './cempleados.component';

describe('CEmpleadosComponent', () => {
  let component: CEmpleadosComponent;
  let fixture: ComponentFixture<CEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
