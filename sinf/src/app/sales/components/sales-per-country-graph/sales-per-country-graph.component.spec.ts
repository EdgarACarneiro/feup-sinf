import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPerCountryGraphComponent } from './sales-per-country-graph.component';

describe('SalesPerCountryGraphComponent', () => {
  let component: SalesPerCountryGraphComponent;
  let fixture: ComponentFixture<SalesPerCountryGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPerCountryGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPerCountryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
