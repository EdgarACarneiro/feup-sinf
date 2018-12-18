import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsInStockComponent } from './assets-in-stock.component';

describe('AssetsInStockComponent', () => {
  let component: AssetsInStockComponent;
  let fixture: ComponentFixture<AssetsInStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsInStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
