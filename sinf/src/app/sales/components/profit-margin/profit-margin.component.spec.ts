import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitMarginComponent } from './profit-margin.component';

describe('ProfitMarginComponent', () => {
  let component: ProfitMarginComponent;
  let fixture: ComponentFixture<ProfitMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
