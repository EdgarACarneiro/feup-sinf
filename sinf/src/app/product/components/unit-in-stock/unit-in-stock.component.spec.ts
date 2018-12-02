import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitInStockComponent } from './unit-in-stock.component';

describe('UnitInStockComponent', () => {
  let component: UnitInStockComponent;
  let fixture: ComponentFixture<UnitInStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitInStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
