import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiPieChartComponent } from './kpi-pie-chart.component';

describe('KpiPieChartComponent', () => {
  let component: KpiPieChartComponent;
  let fixture: ComponentFixture<KpiPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
