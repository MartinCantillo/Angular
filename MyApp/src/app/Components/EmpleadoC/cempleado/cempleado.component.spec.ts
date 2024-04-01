import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEmpleadoComponent } from './cempleado.component';

describe('CEmpleadoComponent', () => {
  let component: CEmpleadoComponent;
  let fixture: ComponentFixture<CEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
