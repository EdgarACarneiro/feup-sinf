import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDelayComponent } from './payment-delay.component';

describe('PaymentDelayComponent', () => {
  let component: PaymentDelayComponent;
  let fixture: ComponentFixture<PaymentDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
