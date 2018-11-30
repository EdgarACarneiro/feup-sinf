import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossNetSalesComponent } from './gross-net-sales.component';

describe('GrossNetSalesComponent', () => {
  let component: GrossNetSalesComponent;
  let fixture: ComponentFixture<GrossNetSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossNetSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossNetSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
