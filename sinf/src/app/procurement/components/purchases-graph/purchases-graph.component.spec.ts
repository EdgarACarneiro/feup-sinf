import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesGraphComponent } from './purchases-graph.component';

describe('PurchasesGraphComponent', () => {
  let component: PurchasesGraphComponent;
  let fixture: ComponentFixture<PurchasesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
