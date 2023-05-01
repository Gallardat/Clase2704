import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpedidoComponent } from './formpedido.component';

describe('FormpedidoComponent', () => {
  let component: FormpedidoComponent;
  let fixture: ComponentFixture<FormpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
