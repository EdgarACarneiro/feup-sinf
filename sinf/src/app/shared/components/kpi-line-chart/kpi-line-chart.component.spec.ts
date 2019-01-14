import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiLineChartComponent } from './kpi-line-chart.component';

describe('KpiLineChartComponent', () => {
  let component: KpiLineChartComponent;
  let fixture: ComponentFixture<KpiLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
