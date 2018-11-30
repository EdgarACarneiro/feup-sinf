import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiBarChartComponent } from './kpi-bar-chart.component';

describe('KpiBarChartComponent', () => {
  let component: KpiBarChartComponent;
  let fixture: ComponentFixture<KpiBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
