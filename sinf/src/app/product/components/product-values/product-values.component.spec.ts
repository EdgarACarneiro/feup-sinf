import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductValuesComponent } from './product-values.component';

describe('ProductValuesComponent', () => {
  let component: ProductValuesComponent;
  let fixture: ComponentFixture<ProductValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
