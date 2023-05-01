import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdetalleComponent } from './formdetalle.component';

describe('FormdetalleComponent', () => {
  let component: FormdetalleComponent;
  let fixture: ComponentFixture<FormdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
