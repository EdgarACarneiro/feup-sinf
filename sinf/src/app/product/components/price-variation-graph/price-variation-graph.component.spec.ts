import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceVariationGraphComponent } from './price-variation-graph.component';

describe('PriceVariationGraphComponent', () => {
  let component: PriceVariationGraphComponent;
  let fixture: ComponentFixture<PriceVariationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceVariationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceVariationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
