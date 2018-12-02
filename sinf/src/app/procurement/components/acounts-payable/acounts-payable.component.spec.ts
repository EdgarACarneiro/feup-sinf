import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountsPayableComponent } from './acounts-payable.component';

describe('AcountsPayableComponent', () => {
  let component: AcountsPayableComponent;
  let fixture: ComponentFixture<AcountsPayableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcountsPayableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountsPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
